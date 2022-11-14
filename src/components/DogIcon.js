import React, { Component, useState }  from 'react';

import propTypes from 'prop-types'

const DogIcon = ({name, url}) => {
  return (
    <button className='icon'>
        <img src={url}></img>
        <p>{name}</p>
    </button>
  )
}
DogIcon.propTypes = {
    name: propTypes.string,
    url: propTypes.string
}
export default DogIcon