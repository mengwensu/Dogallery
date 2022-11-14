import React, { Component }  from 'react';
import {LoremIpsum} from 'react-lorem-ipsum';
const About = () => {
  return (
    <div className='About'>
     

      <h1 className='aboutTitle'>ABOUT US</h1>
      <h1 className='aboutUnderline'>________________</h1>
      <p className='aboutInfo'>< loremipsum p={3} /></p>
      <div className='aboutCircle'></div>
    </div>
  )
}

export default About
