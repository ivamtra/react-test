import logo from './logo.svg';
import './App.css';
import { useRef, useState, useEffect } from 'react';
import Sound from 'react-sound';
import fartsound from './videoplayback.mp3'
import stinky from './le_monke.jpeg'
import stinkySound from './stinky.mp3'

const list = [{id: 1, value: 'fart'}, {id:2, value: 'penis'}, {id:3, value: 'cum'}]

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

function App() {
  const onClick = () => {
    setLi([... li, {id: li.length+1, value: text}])
  }
  const [boolean, setBoolean] = useState(false)
  let [li, setLi] = useState(list)
  let text = useRef('')
  const [playing, toggle] = useAudio('https://www.youtube.com/watch?v=XY2A3c3-lUY');

  let audio = new Audio(stinkySound)
  useEffect(() => console.log(audio))

  const start = () => {
    audio.play()
  }

  const farterFunction = () => {
    setBoolean(true)
    start()
  }
  return (
    <div>
      
      {boolean ? (
        <>
          <img src={stinky} alt="stinky"/>
          <h1>CUM IN MY ASS</h1>
        </>
        ) : (
          <>
          <h1>My app</h1>
      <h2>Cum</h2>
      <div>
      {li.map(item => {
        return (<h3 key={item.id}>{item.value}</h3>)
      })}
      <button onClick={ () => onClick()}>+</button>
      <input onChange = {(e) => {text = e.target.value} }/>
      <br />
      <button onClick={farterFunction}>Secret button</button>
      
      </div>
            
          </>
        )}
      <br />
      
    </div>
  );
}

export default App;
