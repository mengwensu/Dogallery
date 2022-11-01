import React, { Component }  from 'react';
import propTypes from 'prop-types'
const Button = ({text}) => {
  const onClick = () => {
    console.log('click')
  }
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