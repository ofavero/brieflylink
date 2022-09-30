import { useState } from 'react';
import './App.css';
import InpuTshortener from './InputShortener';
import LinkResult from './LinkResult';
import iconGit from './assets/iconGit.svg';
import iconTt from './assets/iconTt.svg';
import iconIns from './assets/iconIns.svg';
 
function App() {

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
    <div className="shortLink">
      <InpuTshortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
    <div className="social-media">
      <a href="https://github.com/ofavero"><img src={iconGit} alt="My Github" /></a>
      <a href="https://www.instagram.com/o_faveroo/"><img src={iconIns} alt="My Instagram" /></a>
      <a href="https://twitter.com/OFaveroo"><img src={iconTt} alt="My Twitter" /></a>
    </div>
    </div>
  );
}

export default App;
