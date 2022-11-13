import React, { Component, useState }  from 'react';
import {dogList} from '../dogList.json';
import { LoremIpsum } from 'react-lorem-ipsum';
import DogIcon from './DogIcon';
import { useParams } from 'react-router-dom';

const BiologicalInfo = () => {
    const {dogname} = useParams();
  return (
    <div className='displayBody'>
      <div className='displayIcon'></div>
         <div className='boxContent'>
             <h2 className='dogName'>{dogname}</h2> 
             <div className='dogTitle'>
              <div>
                  <h4 className='origin'>Origin</h4>
                  <LoremIpsum p={1}/>
              </div>
              <div>
                  <h4 className='height'>Height</h4>
                  <LoremIpsum p={1}/>
              </div>
              <div>
                  <h4 className='weight'>Weight</h4>
                  <LoremIpsum p={1}/>
              </div>
              <div>
                  <h4 className='lifespan'>Life Span</h4>
                  <LoremIpsum p={1}/>
              </div>
              <div>
                  <h4 className='healthissue'>Health Issues</h4>
                  <LoremIpsum p={1}/>
              </div>
              <div>
                  <h4 className='blurb'>Blurb</h4>
                  <LoremIpsum p={1}/>
              </div>
            </div>
            
         </div>
      </div>


)
}

export default BiologicalInfo