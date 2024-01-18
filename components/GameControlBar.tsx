import React from 'react';

interface GameControlBarProps {
  gameState: GameState;
}

type GameState = {
  predator: number;
  prey: number;
  isGamePlaying: boolean;
};

function triggerAzureFunction() {
  const url = 'https://spatial-ecology.azurewebsites.net/api/GameRunner?code=9cNBy-2JpFWMrDlo1LDHrlA73GC-2I4Qlpqz2ireSZmGAzFuaM1ehQ==';

  fetch(url, { method: 'GET' })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
}

class GameControlBar extends React.Component<GameControlBarProps> {

  handleStartGame = (): void => {
    triggerAzureFunction();
    console.log('Game started!');
    
  }

  render(): JSX.Element {
    const { predator, prey, isGamePlaying } = this.props.gameState;

    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 text-black font-manrope font-bold leading-4 group-hover:text-sky-700 text-base flex justify-around items-center p-2.5 fixed top-1 w-11/12 box-border">
    
        <a href="/." className="no-underline text-inherit">Homepage</a>

        <div className="text-red-600">
          Predator: {predator}
        </div>
        <div className="text-green-600">
          Prey: {prey}
        </div>
        <button onClick={this.handleStartGame}
                className={`bg-slate-50 ${isGamePlaying ? 'bg-slate-400' : ''}`}
                disabled={isGamePlaying}> 
          Start Game
        </button>
    </div>


    );
  }
}

export default GameControlBar;
