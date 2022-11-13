import React, { Component, useState }  from 'react';
import dogArr from "../dogList.json"
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
             <div className='dogTitle'> {
             dogArr.filter(dog => dog.name === dogname).map(filteredDog => (
                <div>
                    <div>
                        <h4 className='origin'>Origin</h4>
                        <p>{filteredDog.origin}</p>
                    </div>
                    <div>
                        <h4 className='height'>Height</h4>
                        <p>{filteredDog.height}</p>
                    </div>
                    <div>
                        <h4 className='weight'>Weight</h4>
                        <p>{filteredDog.weight}</p>
                    </div>
                    <div>
                        <h4 className='lifespan'>Life Span</h4>
                        <p>{filteredDog.lifespan}</p>
                    </div>
                    <div>
                        <h4 className='healthissue'>Health Issues</h4>
                        <p>{filteredDog.healthissues}</p>
                    </div>
                </div>
            ))}
         </div>
         </div>
      </div>


)
}

export default BiologicalInfo