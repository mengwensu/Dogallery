import React, { Component, useState }  from 'react';
import {dogList} from '../dogList.json';
import { LoremIpsum } from 'react-lorem-ipsum';

const Video = () => {

    return (
    <div>
        <iframe className='video'
          width="1000" 
          height="500" 
          src="https://www.youtube.com/embed/Pr68R_M5FVk" 
          title="YouTube video player" 
          frameborder="0" 

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
    </div>
    

  )
}

export default Video