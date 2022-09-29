import { useState } from 'react';
import './App.css';
import InpuTshortener from './InputShortener';
import LinkResult from './LinkResult';
import iconGit from './assets/iconGit.png';
import iconTt from './assets/iconTt.png';
import iconIns from './assets/iconIns.png';
 
function App() {

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
    <div className="shortLink">
      <InpuTshortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
    <div className="social-media">
      <a href="https://github.com/ofavero"><img src={iconGit} alt="My Github"></img></a>
      <a href="https://www.instagram.com/o_faveroo/"><img src={iconIns} alt="My Instagram"></img></a>
      <a href="https://twitter.com/OFaveroo"><img src={iconTt} alt="My Twitter"></img></a>
    </div>
    </div>
  );
}

export default App;
