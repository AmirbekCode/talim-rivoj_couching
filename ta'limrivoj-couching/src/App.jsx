import { useState } from 'react'
import './App.css'
import Accordion from './components/FAQ/Accordions'
import Projectinfo from './components/ProjectInfo/ProjectInfo'
import Navbar from "./components/Navbar/Navbar"
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Accordion />
      <Projectinfo />
    </ChakraProvider>

  )
}
export default App
