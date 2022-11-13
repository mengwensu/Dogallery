import React, { Component, useState }  from 'react';
import dogList from '../dogList.json';
import { json, useParams } from 'react-router-dom';
const Video = () => {
    const { dogname } = useParams();
    return (
      dogList.filter(dog => dog.name === dogname).map(filteredDog => (
        <div className='Video'>
          <div className='videoDisplay'>
              <iframe width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${filteredDog.video}`}
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>

              </iframe>
          </div>
      </div>
      ))
  )
}

export default Video