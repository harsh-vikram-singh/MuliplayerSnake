import * as React from 'react';
import './style.css';
import Board from '../Board';

const App = () => {
  const [direction, setDirection] = React.useState(() => 'l') //possible: 'l', 'r', 'u', 'd'

  return (
    <div>
      <div className="test">Ssnake</div>
      <Board />
    </div>
  );
}

export default App;