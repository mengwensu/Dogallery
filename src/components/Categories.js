import React, { Component, useState }  from 'react';
import Header from "./Header"
import dogList from "../dogList.json"
import { useRef } from "react"
import propTypes from 'prop-types'
import DogIcon from './DogIcon';
const Categories = () => {

    // let current = "";
    // const handleClick = (breed) => {
    //     current =  breed;
    //     // console.log(current);

    // }
    const [current, setCurrent] = useState('Herding');
    const [isActive, setIsActive] = useState(false);
    const handleClick = (breed) => {
        current =  breed;
        setIsActive(true);
        // console.log(current);

    }
   
    return (

    <div>
        <Header/>

        <div className='Categories'>
            <h1 className="categoryTitle">CATEGORIES</h1>
            
            <input className="searchBar" type="search" placeholder="Search"></input>
        
            <div className="categoryTabs">
                <button className="tabs" id={current =='Herding'? 'active' : 'inactive'} onClick={() => setCurrent('Herding')}>HERDING</button>

                <button className="tabs" id={current == 'Hound'? 'active' : 'inactive'} onClick={() => setCurrent('Hound')}>HOUND</button>
                <button className="tabs" id={current == 'Sporting'? 'active' : 'inactive'} onClick={() => setCurrent('Sporting')}>SPORTING</button>
                <button className="tabs" id={current == 'NonSporting'? 'active' : 'inactive'} onClick={() => setCurrent('NonSporting')}>NON-SPORTING</button>
                <button className="tabs" id={current == 'Working'? 'active' : 'inactive'} onClick={() => setCurrent('Working')}>WORKING</button>
                <button className="tabs" id={current == 'Terrier'? 'active' : 'inactive'} onClick={() => setCurrent('Terrier')}>TERRIER</button>
                <button className="tabs" id={current == 'Toy'? 'active' : 'inactive'} onClick={() => setCurrent('Toy')}>TOY</button>
            </div>
            <div className='iconMargin'>
                <div className='groupIcons'>
                    {
                        dogList.filter(dog => dog.breed == current).map(filteredDog => (
                            <DogIcon name={filteredDog.name} url={filteredDog.url}/>
                            // console.log(filteredDog.breed)
                            // <p>{filteredDog.name}</p>
                    ))}
                </div>
            </div>
            
            <div className="categoryCircle"></div>
            
           
       

            
        </div>
    </div>
    
)
}
// Categories.protoTypes = {
//     onClick: propTypes.func,
//     tab: propTypes.string,
// }

export default Categories


