import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={ () => this.props.onClick() }>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTurnX: false,
      squares: [
        "", "", "",
        "", "", "",
        "", "", ""
                ],
      xName: "",
      oName: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderSquare(i) {
    // add handler for button click: handleClick
    return (
      <Square 
        id={i} 
        land={2} 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.isTurnX ? "X" : "O";
    this.setState({
      squares: squares,
      isTurnX: !this.state.isTurnX
    });
    //alert("passed function from Board to Square!");
  }

  sendWinner(winner) {
    const url = "http://localhost:3006/";

    fetch(url, {
      method: 'POST',  
      body: JSON.stringify({
        winner: winner
      }),  
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => console.log('Success:', response))
      .catch(error => console.error('Error:', error));
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      oName: event.target.oName.value,        
      xName: event.target.xName.value
    });
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      const winnerVar = winner.toLowerCase()+"Name";
      const winnerName =this.state[winnerVar];
      status = 'Winner: ' + winnerName;
      this.sendWinner(winnerName);
    } else {
      status = 'Next player: ' + (this.state.isTurnX ? 'X' : 'O');
    }

    const getNameDiv = (
      <form onSubmit={this.handleSubmit}>
        <label>
          O Name:
          <input type="text" name="oName" />
        </label>
        <label>
          X Name:
          <input type="text" name="xName" />
        </label>
        <input type="submit" value="Submit" />
      </form>      
    );

    const showNameDiv = (
      <div> 
        <div className="oName">O Name: {this.state.oName}</div>     
        <div className="oName">X Name: {this.state.xName}</div>   
      </div>  
    );

    return (
      <div>
        <div className="status">{status}</div>
        <div className="names">{this.state.oName && this.state.xName ? showNameDiv : getNameDiv}</div>     
        <br/>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

