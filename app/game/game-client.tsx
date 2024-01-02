'use client'

import * as Ably from 'ably';
import { Types } from "ably";
import { AblyProvider, useAbly, useChannel, usePresence } from "ably/react"
import { MouseEventHandler, MouseEvent, useState, useEffect } from 'react'
import Logger, { LogEntry } from '../../components/logger';
import GameComponent from '../../components/Game';
import PlayerInfo from "../../components/playerInfoTypes";
import Sidebar from '../../components/SidebarPresence';
import { error } from 'console';

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

const Game: React.FC<GameProps> = ({ clientId }) => {

  const [playersInfo, setPlayersInfo] = useState<Record<string, PlayerInfo>>({});


  const { channel : userDataChannel, ably: ablyClient} = useChannel(
    { channelName: "user-data-channel" },  (message: Types.Message) => {
      if (message.name == "user-data-update") {
        
        const { clientId, energy, characterMacro } = message.data;
        setPlayersInfo(prev => ({
          ...prev,
          [clientId]: { clientId: clientId, name: "user_" + clientId.slice(-5), energy: energy, characterMacro: characterMacro }
        }));
        // console.log("user data update: " + clientId);
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
          name: "user_" + presenceMessage.clientId.slice(-5),
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
  { channelName: "user-data-channel" }, 'enter', 
  (presenceMessage) => {
    if (presenceMessage.action === 'enter') {
      setPlayersInfo(prev => {
        const existingPlayer = prev[presenceMessage.clientId];
        return {
          ...prev,
          [presenceMessage.clientId]: {
            clientId: presenceMessage.clientId,
            name: "user_"+presenceMessage.clientId.slice(-5),
            energy: existingPlayer ? existingPlayer.energy : 0,
            characterMacro: existingPlayer ? existingPlayer.characterMacro : ""
          }
        };
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
          <GameComponent />
       </div>
      </>
    );
    
};