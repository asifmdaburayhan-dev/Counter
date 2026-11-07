import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  // Increase
  const increase = () => {
    setCount(count + 1);
  }

  // Decreasee
  const decrease = () => {
    setCount(count - 1);
  }

  // Reset
  const reset = () => {
    setCount(0);
  }


return(
  <div className="flex items-center justify-center">
    <div className=" bg-white w-80 h-50 border border-black rounded-2xl text-center p-3">
      <h1 className="text-3xl font-bold">
        Counter Demo
      </h1>
      <h2 className="text-xl mt-2 mb-3 font-semibold">
        {count}
      </h2>
      <div className="button">
        <button onClick={increase} className="bg-green-500 text-white  mr-2 p-2 rounded-2xl hover:bg-green-600 hover:cursor-pointer hover:font-semibold">
          + Increasee
        </button>
        <button onClick={decrease} className="bg-red-500  text-white p-2 rounded-2xl hover:bg-red-600 hover:cursor-pointer hover:font-semibold">
          - Decrease
        </button>
        <button onClick={reset} className=" bg-gray-200 border border-black w-50 mt-3 p-2 mb-10 rounded-2xl font-semibold hover:bg-gray-300 hover:cursor-pointer">
         Reset
       </button>
      </div>
    </div>
  </div>
)
}



export default App;
