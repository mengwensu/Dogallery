import React, { Component, useState }  from 'react';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import dogList from "../dogList.json"
import { useRef } from "react"
import propTypes from 'prop-types'
import DogIcon from './DogIcon';
import { GoSearch } from "react-icons/go";
import Display from './Display';


const Categories = () => {

    const [current, setCurrent] = useState('Herding');
    const [dogName, setName] = useState('default');
    // const onClick = () => {
    //     console.log(current);
    // }
    const handleClick = () => () => {
        // setName(dogName);
        console.log(dogName);
    }

    return (

        <div>
            <div className='Categories'>
                <h1 className="categoryTitle">CATEGORIES</h1>
                <div className='searchSection'> 
                    <input className="searchBar" type="search" placeholder="Search"></input>
                    <button className='search'><GoSearch/></button>
                </div>
               
            
                <div className="categoryTabs">
                    <button className="tabs" id={current === 'Herding'? 'active' : 'inactive'} onClick={() => setCurrent('Herding')}>HERDING</button>
                    <button className="tabs" id={current === 'Hound'? 'active' : 'inactive'} onClick={() => setCurrent('Hound')}>HOUND</button>
                    <button className="tabs" id={current === 'Sporting'? 'active' : 'inactive'} onClick={() => setCurrent('Sporting')}>SPORTING</button>
                    <button className="tabs" id={current === 'NonSporting'? 'active' : 'inactive'} onClick={() => setCurrent('NonSporting')}>NON-SPORTING</button>
                    <button className="tabs" id={current === 'Working'? 'active' : 'inactive'} onClick={() => setCurrent('Working')}>WORKING</button>
                    <button className="tabs" id={current === 'Terrier'? 'active' : 'inactive'} onClick={() => setCurrent('Terrier')}>TERRIER</button>
                    <button className="tabs" id={current === 'Toy'? 'active' : 'inactive'} onClick={() => setCurrent('Toy')}>TOY</button>
                </div>
                <div className='iconMargin'>
                    <div className='groupIcons'>
                        {
                            dogList.filter(dog => dog.breed == current).map(filteredDog => (
                                
                <Link to={`/display/${filteredDog.name}`}><div onClick={() => setName(filteredDog.name)}><DogIcon name={filteredDog.name} url={filteredDog.url}/></div></Link>

                                // < className="exploreButton">Explore Dog Breeds <TfiArrowRight/></a>

                                // console.log(filteredDog.breed)
                                // <p>{filteredDog.name}</p>
                        ))}
                    </div>
                </div>

                {/* <Routes>
                    <Route path="/{}" element={<Home/>} />

                </Routes> */}
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


