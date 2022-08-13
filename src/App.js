import './App.css';
import Pin from './components/otp';
import { useState } from 'react';

function App() {

  const [otp, setotp] = useState("")
  return (
    <div className="App">
      <Pin length={4} Changeotphandler={(value) => {setotp(value)}}/>

      <h3>The value of otp is {otp}</h3>
    </div>
  );
}

export default App;