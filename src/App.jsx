import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Foot from './components/Foot'

function App() {
  return (
    <>
     <Navbar/>
     <div className="bawah">
      <Content/>
      <Foot/>
     </div>
    </>

  )
}

export default App;
