
import React, { Component, useState }  from 'react';
import dogArr from '../dogList.json';
import { json, useParams } from 'react-router-dom';
const Video = () => {
    const { dogname } = useParams();
    return (
      dogArr.filter(dog => dog.name === dogname).map(filteredDog => (
      <div>
          <iframe className='video'
            width="1000" 
            height="500" 
            src={filteredDog.video}
            title="YouTube video player" 
            frameborder="0" 

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
      </div>
      ))
    

  )
}

export default Video