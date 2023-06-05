import { useState } from 'react'
import './App.css'
import Projectinfo from './components/ProjectInfo/ProjectInfo'
import Navbar from "./components/Navbar/Navbar"
import Main from './components/Main/Main'
import './App.css'
import Faq from './components/FAQ/Faq'
import Ceo from './components/CeoInfo/Ceo'
import StudentInfo from './components/StudentInfo/StudentInfo'
import MainInfo from './components/MainInfo/MainInfo'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Main />
      <MainInfo />
      <Projectinfo />
      <Faq />
      <Ceo />
      <StudentInfo />
    </div>
  )
}
export default App
