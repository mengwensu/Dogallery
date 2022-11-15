import React, { Component }  from 'react';
import {LoremIpsum} from 'react-lorem-ipsum';
const Contact = () => {
  return (
    <div className='Contact'>
        <h1 className='contactTitle'>Contacts</h1>
        <h1 className='contactUnderline'>________________</h1>
        <p className='contactInfo'>For any further inquiriers about the website, suggestions, or other questions please use the following contact information. </p>
        <h2 className='email'>Email: dogallery@gmail.com</h2>
        <h2 className='phone'>Phone: 703-123-4567</h2>
        <div className='contactCircle'></div>
    </div>
  )
}

export default Contact
