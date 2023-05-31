import { useState } from 'react'
import './App.css'
import Projectinfo from './components/ProjectInfo/ProjectInfo'
import Navbar from "./components/Navbar/Navbar"
import Main from './components/Main/Main'
import './App.css'

function App() {  
  return (
    <div>
      <Navbar />
      <Main />
      <Projectinfo />
    </div>
  )
}
export default App
