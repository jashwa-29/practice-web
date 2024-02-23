import logo from './logo.svg';
import './App.css';
import UsestatePra from './UsestatePra';
import Fileone from './Fileone';
import { useState } from 'react';


function App() {
const [text , setText] = useState(`jashwa`)
 
  return (
   <div>
  <UsestatePra />
  <Fileone parsingtext = {text} />

  </div>


  );
}

export default App;
