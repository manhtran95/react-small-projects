import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge'

function App() {

  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTimeInSec={1} />
        <TimerChallenge title="Not easy" targetTimeInSec={5} />
        <TimerChallenge title="Getting tough" targetTimeInSec={10} />
        <TimerChallenge title="Pros only" targetTimeInSec={15} />
      </div>
    </>
  );
}

export default App;
