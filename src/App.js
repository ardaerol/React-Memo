
import './App.css';
import { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setNumber((prevState)=> prevState +1)
  },[])

  // const data = useMemo(() => {
  //   return calculateObject();
  // }, [])

  return (
    <div className="App">
      <Header increment={increment}  />
      <hr></hr>

     <h1>{number}</h1>
     
     <br/>
     <br/>
     <br/>
    <input value={text} onChange={({target}) => setText(target.value)}></input>
     
    </div>
  );
}

// function calculateObject(){
//   return {name: 'Mehmet'}
// }

export default App;
