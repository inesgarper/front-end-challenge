import { Container } from './styles';

export const AudioPlayer = () => (
  <Container>
    <div>
      {/* SongInfo */}
      <button>Like</button>
      <img></img>
      <div>
        <p>Song Title</p>
        <p>Song Artist</p>
      </div>
    </div>
    <div>
      {/* Controls */}
      <button>Prev</button>
      <button>Play / Pause</button>
      <button>Next</button>
    </div>
    <div>
      {/* ProgressBar */}
      <p>Current Time</p>
      <input type="range"></input>
      <p>Duration</p>
    </div>
  </Container>
);
