import { useState } from 'react'
import './App.css'
import Projectinfo from './components/ProjectInfo/ProjectInfo'
import Navbar from "./components/Navbar/Navbar"
import Main from './components/Main/Main'
import './App.css'
import Faq from './components/FAQ/Faq'


  function App() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <Projectinfo />
        <Faq />
      </div>



    )
  }
  export default App
