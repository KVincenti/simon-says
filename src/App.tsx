import React from 'react';
import './App.css';
import GameButton from './components/GameButton/GameButton';
import { Props } from './components/GameButton/types';

function App() {

  return (
    <div className="App">
      <h1>Simon Says</h1>
      <p>Try you best to follow the pattern!</p>
      <GameButton
        color="pink"
        number={1}
        onClick={onButtonClick}
      />
      <GameButton
        color="lightgreen"
        number={2}
        onClick={onButtonClick}
      />
      <GameButton
        color="lightblue"
        number={3}
        onClick={onButtonClick}
      />
      <GameButton
        color="lightyellow"
        number={4}
        onClick={onButtonClick}
      />
    </div>
  );
}

function onButtonClick(number: number) {
  console.log(number)
}

export default App;
