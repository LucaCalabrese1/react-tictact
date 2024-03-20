import Player from './components/Player.jsx';

function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player initialName='Giocatore 1' symbol='X' />
          <Player initialName='Giocatore 2' symbol='O' />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
