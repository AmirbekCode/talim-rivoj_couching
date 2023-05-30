import { useState } from 'react'
import './App.css'
import Faq from './components/FAQ/Faq'
import Projectinfo from './components/ProjectInfo/ProjectInfo'


function App() {

  return (
    <div className="App">
      <Faq/>
      <Projectinfo/>
    </div>
  )
}

export default App
