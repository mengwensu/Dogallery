import React from 'react'
import propTypes from 'prop-types'
const DogIcon = ({name, url}) => {
  return (
    <div className='icon'>
        <img src={url}></img>
        <p>{name}</p>
    </div>
  )
}
DogIcon.propTypes = {
    name: propTypes.string,
    url: propTypes.string
}
export default DogIcon