import React, { Component }  from 'react';
import propTypes from 'prop-types'
const Button = ({text}) => {

  return (
    
    <button className='btn'>
      {text}
    </button>
    
  )
}
Button.propTypes = {
  text: propTypes.string,
}

export default Button