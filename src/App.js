import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import styles from './components/Wrapper/Wrapper.module.css';

import StartButton from './components/StartButton/StartButton';
// .parent {
//   display: grid;
//   grid - template - columns: repeat(12, 1fr);
//   grid - template - rows: repeat(12, 1fr);
//   grid - column - gap: 0px;
//   grid - row - gap: 0px;
// }
// .div1 { grid - area: 1 / 3 / 2 / 5; } 
// .div2 { grid - area: 1 / 6 / 2 / 8; } 
// .div3 { grid - area: 1 / 9 / 2 / 11; } 
// .div4 { grid - area: 3 / 2 / 9 / 6; } 
// .div5 { grid - area: 3 / 9 / 9 / 12; } 
// .div6 { grid - area: 2 / 6 / 5 / 9; } 
// .div7 { grid - area: 6 / 6 / 9 / 9; } 
// .div8 { grid - area: 10 / 4 / 13 / 10; } 

function App() {
  return (
    <div className={styles.Wrapper}>
        <StartButton />
        {/* <div className="div2"> </div>
        <div className="div3"> </div>
        <div className="div4"> </div>
        <div className="div5"> </div>
        <div className="div6"> </div>
        <div className="div7"> </div>
        <div className="div8"> </div> */}
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
