import logo from './logo.svg';
import './App.css';
import {useRef} from 'react'
import UseImage from './components/useimage/useimage';

function App() {

  const inputRef = useRef(null)

  return (
    <div>
      {/* <input type="file" 
       ref ={inputRef}
       />

      <button onClick={() =>{
        console.log(inputRef.current.value)
      }}> picke the file 
      </button> */}
      <UseImage/>
    </div>
  );
}

export default App;
