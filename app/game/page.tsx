// game.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const GameClient = dynamic(() => import('./game-client.tsx'), {
    ssr: false,
  })

const Game = () => {

  return (
    <>
      <GameClient />
    </>
  )
}

export default Game;

  