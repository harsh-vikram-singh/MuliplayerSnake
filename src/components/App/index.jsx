import * as React from 'react';
import './style.css';
import Board from '../Board';

const App = () => {
  const [gameState, setGameState] = React.useState('on');
  const [direction, setDirection] = React.useState(() => 'hl') //possible: 'hl', 'hr', 'vu', 'vd'

  const captureKeyPress = (e) => {
    console.log('running the captureKeyPress function');
    console.log(e);
  }

  React.useEffect(() => {
    console.log('running the effect');
    document.addEventListener('keydown', (e) => {
      setDirection(e.key);
    });
    return document.removeEventListener('keydown', (e) => {
      setDirection(e.key);
    })
  }, []);

  return (
    <div>
      <Board />
    </div>
  );
}

export default App;