import React from 'react';
import './App.css';
import GameButton from './components/GameButton/GameButton';

function App() {
  return (
    <div className="App">
      <h1>Simon Says</h1>
      <p>This is a basic simon says game so I can learn how to code.</p>
      <GameButton
        color="pink"
        number={1}
      />
      <GameButton
        color="lightgreen"
        number={2}
      />
      <GameButton
        color="lightblue"
        number={3}
      />
      <GameButton
        color="lightyellow"
        number={4}
      />
    </div>
  );
}

export default App;
