import { useState } from 'react' 
import './App.css'
import Slider from './slider/Slider' 
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button id="myBtn" >Try it</button>
      <Slider></Slider>
    </div>
  )
}

export default App
