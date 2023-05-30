import { useState } from 'react'
import './App.css'
import Faq from './components/FAQ/Faq'

function App() {
  const faqData = [
    {
      question: 'Biznes model',
      answer: 'Biznes modelning tuzilishi'
    }
  ]

  return (
    <div className="App">
      <Faq faqData={faqData}/>
    </div>
  )
}

export default App
