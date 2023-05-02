import logo from './logo.svg';
import './App.css';
import {useRef} from 'react'

function App() {

  const inputRef = useRef(null)

  return (
    <div>
      <input type="file" 
       ref ={inputRef}
       />

      <button onClick={() =>{
        console.log(inputRef.current.value)
      }}> picke the file 
      </button>
   
    </div>
  );
}

export default App;
