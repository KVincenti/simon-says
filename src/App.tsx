import React from 'react';
import './App.css';
import GameButton from './components/GameButton/GameButton';

function App() {
  const [pattern, setPattern] = React.useState(generateNewPattern([]));
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <div className="App">
      <h1>Simon Says</h1>
      <p>Try your best to follow the pattern!</p>
      <p>{pattern}</p>
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

  function onButtonClick(number: number) {
    // User selected a wrong number
    if(number !== pattern[currentIndex]) {
      window.alert("Sorry, you lose.")
      setCurrentIndex(0);
      return;
    }

    console.log(currentIndex)
    if(currentIndex === 9) {
      window.alert("You win!")
      setCurrentIndex(0);
      return;
    }

    // User finished the current pattern, let's add a new number, and have them start at the beginning again
    if(currentIndex === pattern.length - 1) {
      setPattern(generateNewPattern(pattern));
      setCurrentIndex(0);
      return;
    }

    // User got this one right, move them to the next number
    setCurrentIndex(currentIndex + 1);
  }

  function generateNewPattern(currentPattern: number[]) {
    const newPattern = [...currentPattern];
    const ranNum = Math.ceil(Math.random() * 4);
    newPattern.push(ranNum);
    return newPattern;
  }
}

export default App;
