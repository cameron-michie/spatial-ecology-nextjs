"use client"
import * as Ably from 'ably';
import { Types } from "ably";
import { AblyProvider, useAbly, useChannel, usePresence } from "ably/react"
import { useState, useEffect } from 'react'
import GameComponent from '../../components/Game';
import GameControlBar from '../../components/GameControlBar';
import PlayerInfo from "../../components/playerInfoTypes";
import Sidebar from '../../components/SidebarPresence';

export default function GameClient() {
  const [client, setClient] = useState<InstanceType<typeof Ably.Realtime.Promise> | null>(null);
  const [clientId, setClientId] = useState('');

  useEffect(() => {
    const newClient = new Ably.Realtime.Promise({
      authUrl: '/token',
      authMethod: 'POST',
      clientId: `user_${Date.now().toString().slice(-5)}`
    });

    newClient.connection.once('connected', () => {
      setClientId(newClient.auth.clientId);
      console.log("successful clientid = " + newClient.auth.clientId);
    });

    setClient(newClient);

    return () => {
      newClient.close();
    };
  }, []);

  return clientId && client ? (
    <AblyProvider client={client}>
      <Game clientId={clientId}/>
    </AblyProvider>
  ) : (
    <div>Loading...</div>
  );
}

interface GameProps {
  clientId: string;
}
type GameState = {
  predator: number;
  prey: number;
  isGamePlaying: boolean;
};

const Game: React.FC<GameProps> = ({ clientId }) => {

  const [playersInfo, setPlayersInfo] = useState<Record<string, PlayerInfo>>({});
  const [preyPred, setPreyPred] = useState<GameState>({ prey: 0, predator: 0, isGamePlaying: false });

  const { channel : userDataChannel, ably: ablyClient} = useChannel(
    { channelName: "user-data-channel" },  (message: Types.Message) => {
      if (message.name == "user-data-update") {
        
        const { clientId, energy, characterMacro, numPrey, numPred } = message.data;
        setPlayersInfo(prev => ({
          ...prev,
          [clientId]: { clientId: clientId, name: "default", energy: energy, characterMacro: characterMacro }
        }));

        setPreyPred(prevState => ({
          ...prevState,
          prey: numPrey,
          predator: numPred
      }));
      }

      if (message.name == "user-name-update") {
        const playerName : string = message.data["name"];
        const id : string = message.data["id"]; 
        console.log("setting player name " + playerName + " to id " + id);
        setPlayersInfo(prev => {
          const existingPlayer = prev[id];
          return {
            ...prev,
            [id]: {
              clientId: id,
              name: playerName,
              energy: existingPlayer ? existingPlayer.energy : 0,
              characterMacro: existingPlayer ? existingPlayer.characterMacro : ""
            }
          };
        });
      }

      if (message.name === "game-update") {
        const isGamePlaying = message.data === "start";
        setPreyPred(prevState => ({
            ...prevState,
            isGamePlaying: isGamePlaying
        }));
      }
    }
  );
userDataChannel.presence.get().then(presenceMessages => {
  presenceMessages.forEach(presenceMessage => {
    setPlayersInfo(prev => {
      const existingPlayer = prev[presenceMessage.clientId];
      return {
        ...prev,
        [presenceMessage.clientId]: {
          clientId: presenceMessage.clientId,
          name: existingPlayer ? ( existingPlayer.name!="default" ? existingPlayer.name : "default" ) : "default",
          energy: existingPlayer ? existingPlayer.energy : 0,
          characterMacro: existingPlayer ? existingPlayer.characterMacro : ""
        }
      };
    });
  });
}).catch(error => {
  console.error("Error fetching presence messages:", error);
});

const { presenceData, updateStatus } = usePresence(
  { channelName: "user-data-channel" }, 'presence-update', 
  (presenceMessage) => { 
    if (presenceMessage.action === 'enter') {
      setPlayersInfo(prev => {
        const existingPlayer = prev[presenceMessage.clientId];
        return {
          ...prev,
          [presenceMessage.clientId]: {
            clientId: presenceMessage.clientId,
            name: "default",
            energy: existingPlayer ? existingPlayer.energy : 0,
            characterMacro: existingPlayer ? existingPlayer.characterMacro : ""
          }
        };
      });
    }

    if (presenceMessage.action === 'leave') {
      setPlayersInfo(prev => {
          const updatedPlayersInfo = { ...prev };
          delete updatedPlayersInfo[presenceMessage.clientId];
          return updatedPlayersInfo;
      });
  }
  }
);

  const getDirection = (key: string): string | null => {
    const keyDirectionMap: { [key: string]: string } = {
      ArrowLeft: 'LEFT',
      ArrowRight: 'RIGHT',
      ArrowUp: 'UP',
      ArrowDown: 'DOWN',
    };
    return keyDirectionMap[key] || null;
  };

    // Handler for key press events
    const handleKeyPress = (event: KeyboardEvent): void => {
      const direction = getDirection(event.key);
      
      if (direction === 'UP' || direction === 'DOWN') {
        // Prevent default scrolling behavior for up and down arrow keys
        event.preventDefault();
      }  

      if (direction) {
        userDataChannel.publish(`${clientId}-moves`, direction)
          .then(() => console.log(`Published direction ${direction} to ${clientId}`))
          .catch((error) => console.error('Error publishing direction:', error));
      }
    };

    useEffect(() => {
      window.addEventListener('keydown', handleKeyPress);
  
      // Cleanup function
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, []);

    return (
      <>
        <div className="flex">
          <Sidebar players={playersInfo} thisClientId={clientId} />
          <GameControlBar gameState={preyPred} />
          <GameComponent />
       </div>
      </>
    );
    
};