import React from 'react';
import './App.css';
import GameButton from './components/GameButton/GameButton';

function App() {
  console.log(generateNewPattern([]));
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

function generateNewPattern(currentPattern: number[]) {
  const newPattern = [...currentPattern];
  const ranNum = Math.ceil(Math.random() * 4);
  newPattern.push(ranNum);
  return newPattern;
}

export default App;
