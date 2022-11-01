import React, { Component, useState }  from 'react';
import Header from './Header';
const Display = () => {
    const [current, setCurrent] = useState('History');

    return (
    <div>
        <Header/>
        <div className="Display">
            <div className="displayTabs">
                <button className="tabs" id={current == 'History'? 'active' : 'inactive'} onClick={() => setCurrent('History')}>HISTORY</button>
                <button className="tabs" id={current == 'Biological Information'? 'active' : 'inactive'} onClick={() => setCurrent('Biological Information')}>BIOLOGICAL INFORMATION</button>
                <button className="tabs" id={current == 'Video'? 'active' : 'inactive'} onClick={() => setCurrent('Video')}>VIDEO</button>
                <button className="tabs" id={current == 'Breed Evolution'? 'active' : 'inactive'} onClick={() => setCurrent('Breed Evolution')}>BREED EVOLUTION</button>
            </div>
            <div className="displayBody">
               
            </div>

            <div className="categoryCircle"></div>

        </div>
    </div>
    

  )
}

export default Display