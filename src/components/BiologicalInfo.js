import React, { Component, useState }  from 'react';
import dogList from "../dogList.json"
import { useParams } from 'react-router-dom';

const BiologicalInfo = () => {
    const {dogname} = useParams();
  return (
    <div className='displayBody'>
      <div className='displayIcon'></div>
         <div className='boxContent'>
             <h2 className='dogName'>{dogname}</h2> 
             <div className='dogTitle'> {
             dogList.filter(dog => dog.name === dogname).map(filteredDog => (
                <div>
                    <div>
                        <h4 className='origin'>Origin</h4>
                        <p className='bioInfo'>{filteredDog.origin}</p>
                    </div>
                    <div>
                        <h4 className='height'>Height</h4>
                        <p className='bioInfo'>{filteredDog.height}</p>
                    </div>
                    <div>
                        <h4 className='weight'>Weight</h4>
                        <p className='bioInfo'>{filteredDog.weight}</p>
                    </div>
                    <div>
                        <h4 className='lifespan'>Life Span</h4>
                        <p className='bioInfo'>{filteredDog.lifespan}</p>
                    </div>
                    <div>
                        <h4 className='healthissue'>Health Issues</h4>
                        <p className='bioInfo'>{filteredDog.healthissues}</p>
                    </div>
                </div>
            ))}
         </div>
         </div>
      </div>


)
}

export default BiologicalInfo