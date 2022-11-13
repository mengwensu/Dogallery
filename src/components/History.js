import React, { Component, useState }  from 'react';
import {dogList} from '../dogList.json';
import { LoremIpsum } from 'react-lorem-ipsum';
import DogIcon from './DogIcon';
import { useParams } from 'react-router-dom';

const History = () => {
  const { dogname } = useParams();
    return (
      <div className='displayBody'>
        <div className='displayIcon'></div>
           <div className='boxContent'>
               <h2 className='dogName'>{dogname}</h2> 
               <div className='dogTitle'>
                   <LoremIpsum p={6} />
               </div>
              
           </div>
        </div>


  )
}

export default History