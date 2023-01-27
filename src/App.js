import './App.css';
import Header from './Components/Header/Header.js';
import Board from './Components/Board/Board.js';
import Message from './Components/Message/Message.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Message />
        <Board />
      </main>
    </div>
  );
}

export default App;
