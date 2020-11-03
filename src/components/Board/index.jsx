import * as React from 'react';
import './style.css';

const Board = (props) => {
  let boardSize = 400;
  const getBoardDivs = () => {
    const divsArray = [];
    for (let i = 0; i < boardSize; i++) {
      let col = i % 20;
      let row = Math.floor(i / 20);
      divsArray.push(<div
          className='boardDiv'
          data-col={col}
          data-row={row}
          onClick={e => {
            console.log('row: ', e.target.dataset.row, ' col: ', e.target.dataset.col)
          }}
        ></div>)
    }
    return divsArray;
  };

  const boardDivs = getBoardDivs();

  return (
    <section id="board">
      {boardDivs}
    </section>
  )
}

export default Board;