import React, { Component, useState }  from 'react';
import {dogList} from '../dogList.json';
import { LoremIpsum } from 'react-lorem-ipsum';
import DogIcon from './DogIcon';

const History = () => {

    return (
      <div className='displayBody'>
        <div className='displayIcon'></div>
           <div className='boxContent'>
               <h2 className='dogName'>DOGNAME</h2> 
               <div className='dogTitle'>
                   <LoremIpsum p={6} />
               </div>
              
           </div>
        </div>


  )
}

export default History