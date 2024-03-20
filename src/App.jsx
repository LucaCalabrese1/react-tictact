import Player from './components/Player.jsx';

function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player name='Giocatore 1' symbol='X' />
          <Player name='Giocatore 2' symbol='O' />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
