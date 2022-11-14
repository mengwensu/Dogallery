import React, { Component, useState }  from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import DogIcon from './DogIcon';
import { json, useParams } from 'react-router-dom';
import dogArr from "../dogList.json"

const History = () => {
  const { dogname } = useParams();
    return (
      <div className='displayBody'>
        <div className='displayIcon'></div>
           <div className='boxContent'>
               <h2 className='dogName'>{dogname}</h2> 
               <div className='dogTitle'>
                  {
                  dogArr.filter(dog => dog.name === dogname).map(filteredDog => (
                    <div>
                      <p className='historyInfo'>{filteredDog.history}</p>
                    </div>
                  ))}
               </div>
              
           </div>
        </div>


  )
}

export default History