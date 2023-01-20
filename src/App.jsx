import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AllContacts from './Components/AllContacts'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './Components/Contact';
import Sort from './Components/Sort';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<AllContacts />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Sort' element={<Sort />} />
    </Routes>
    </>
  )
}

export default App
