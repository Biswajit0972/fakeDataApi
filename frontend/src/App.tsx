import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  async function fetchData() {
    try {
      const response = await axios.post("https://fake-data-api-ivory.vercel.app/v1/signin", {identifier:"v234", password:"12345678"}, {withCredentials:true});
      console.log(response);
    }catch(error) {
      console.log(error);
    }
  }

  const [count, setCount] = useState(0)
   useEffect(() => {
 

   }, [])
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={ () => {
          fetchData()
          setCount((count) => count + 1)
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
