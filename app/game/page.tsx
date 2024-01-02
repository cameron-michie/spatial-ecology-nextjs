// game.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '../../components/SidebarPresence.tsx';


const GameClient = dynamic(() => import('./game-client.tsx'), {
    ssr: false,
  })

const Game = () => {
  const clientID = "user_" + Date.now(); // Unique identifier for the client
  const pageId="Game"

  return (
    <>
      <GameClient />
    </>
  )
}

export default Game;

  