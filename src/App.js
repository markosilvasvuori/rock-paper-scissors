import { ScoreProvider } from "./store/score-context";
import Scoreboard from "./components/UI/Scoreboard";
import Game from "./components/Game/Game";

import './App.css';

function App() {
  return (
    <div className='container'>
      <ScoreProvider>
        <Scoreboard />
        <Game />
      </ScoreProvider>
    </div>
  );
}

export default App;
