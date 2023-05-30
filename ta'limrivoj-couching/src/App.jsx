import { useState } from 'react'
import './App.css'
import Projectinfo from './components/ProjectInfo/ProjectInfo'
import Navbar from "./components/Navbar/Navbar"
import { ChakraProvider } from '@chakra-ui/react'

function App() {
// <<<<<<< HEAD
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
// =======
//   return (
//     <ChakraProvider>
//       <Navbar />
//       <Projectinfo />
//     </ChakraProvider>

// >>>>>>> 165194531dcb0720061d12672fc052293f673187
//   )
}
export default App
