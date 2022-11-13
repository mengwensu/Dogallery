import React, { Component, useState }  from 'react';
import {dogList} from '../dogList.json';
import { LoremIpsum } from 'react-lorem-ipsum';
import History from './History';
import BiologicalInfo from './BiologicalInfo';
import Video from './Video';
import BreedEvol from './BreedEvol';
import { useParams } from 'react-router-dom';

const Display = () => {
    const [current, setCurrent] = useState('History');
    const { dogname } = useParams();    

    return (
        <div className="Display">
            <div className="displayTabs">

                <button className="tabs" id={current === 'History'? 'active' : 'inactive'} onClick={() => setCurrent('History')}>HISTORY</button>
                <button className="tabs" id={current === 'Biological Information'? 'active' : 'inactive'} onClick={() => setCurrent('Biological Information')}>BIOLOGICAL INFORMATION</button>
                <button className="tabs" id={current === 'Video'? 'active' : 'inactive'} onClick={() => setCurrent('Video')}>VIDEO</button>
                <button className="tabs" id={current === 'Breed Evolution'? 'active' : 'inactive'} onClick={() => setCurrent('Breed Evolution')}>BREED EVOLUTION</button>
                
            </div>

            <div className="displayBody">

                {current === 'History'? <History/> : ''}
                {current === 'Biological Information'? <BiologicalInfo/> : ''}
                {current === 'Video'? <Video/> : ''}
                {current === 'Breed Evolution'? <BreedEvol/> : ''} 
        
                </div>
               <div className="categoryCircle"></div>

            </div>
  )
}
export default Display