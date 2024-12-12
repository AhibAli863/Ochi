import React from 'react'
import Navbar from './Components/Navbar'
import MidContainer from './Components/MidContainer'
import Marquee from './Components/Marquee'
import Expect from './Components/Expect'
import Approach from './Components/Approach'
import Eyes from './Components/Eyes'
import Feature from './Components/Feature'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='bg-zinc-100 flex flex-col'>
    <Navbar/>
    <MidContainer/>
    <Marquee/>
    <Expect/>
    <Approach/>
    <Eyes/>
    <Feature/>
    <Footer/>
    </div>
  )
}

export default App