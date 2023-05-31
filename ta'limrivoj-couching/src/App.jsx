import { useState } from 'react'
import './App.css'
import Projectinfo from './components/ProjectInfo/ProjectInfo'
import Navbar from "./components/Navbar/Navbar"
import Main from './components/Main/Main'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

function App() {  
  return (
    <ChakraProvider>
      <Navbar />
      <Main />
      <Projectinfo />
    </ChakraProvider>
  )
}
export default App
