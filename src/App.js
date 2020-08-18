import React from 'react';
import './App.css';
import styles from './components/Wrapper/Wrapper.module.css';

import {
  StartButton,
  Counter,
  SoundToggle,
  Logo,
  ImagePlaceholder,
  QuestionMark,
} from './components';


// .parent {
//   display: grid;
//   grid - template - columns: repeat(12, 1fr);
//   grid - template - rows: repeat(12, 1fr);
//   grid - column - gap: 0px;
//   grid - row - gap: 0px;
// }
// .div1 { grid-area: 1 / 3 / 2 / 5; } 
// .div2 { grid-area: 1 / 6 / 2 / 8; } 
// .div3 { grid-area: 1 / 9 / 2 / 11; } 
// .div4 { grid-area: 3 / 2 / 10 / 6; } 
// .div5 { grid-area: 2 / 6 / 6 / 9; } 
// .div6 { grid-area: 6 / 6 / 10 / 9; } 
// .div7 { grid-area: 3 / 9 / 10 / 12; } 
// .div8 { grid-area: 10 / 4 / 13 / 10; }

function App() {
  return (
    <div className={styles.Wrapper}>
      <StartButton />
      <Counter />
      <SoundToggle />
      <Logo />
      <ImagePlaceholder />
      <QuestionMark />
    </div>
  );
}

export default App;
