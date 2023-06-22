import React from 'react'
import './header.css'
import CTA from './CTA'
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3> Hello!</h3>
        <h1> 
          <span className='name'>I'm</span>  Senghong Horn
        </h1>
        <div className="App">
          <Typewriter
            options={{
            strings: ["Frontend Developer", "Penetration Testing"],
            delay: 80,
            autoStart: true,
            loop: true
            }}/>
        </div>
        <CTA/>
     </div>
    </header>
  )
}

export default Header