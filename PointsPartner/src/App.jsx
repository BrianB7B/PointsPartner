import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from './components/LandingPage';
import './index.css';


export default function App() {
  const [count, setCount] = useState(0)
  const [appState, setAppState] = useState({});  // assuming an empty object as initial state, adjust as needed

  return (
    <>
      {/* <h1>Vite + Brian</h1> */}
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landingpage appState={appState} setAppState={setAppState}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

