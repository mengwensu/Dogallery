import React, { Component, useState }  from 'react';
import DogIcon from './DogIcon';
import dogList from '../dogList.json'
import { Route, Link, Routes, useParams } from 'react-router-dom';
import { GoSearch } from "react-icons/go";


const Search = () => {
    const [dogName, setName] = useState("");
    const {keyword} = useParams();
    const [searchKey, setSearchKey] = useState("");
  return (
      <div className='SearchPage'>
          <h1 className='searchTitle'>Search results for keyword "{keyword}"</h1>
          <div className='searchSection'> 
            <input className="searchBar" 
                    type="search" 
                    placeholder="Search" 
                    onChange={(event) => {
                        setSearchKey(event.target.value);
                    }}>
            </input> 
            <Link to={`/search/${searchKey}`}>
                <button className='search' onClick={(event) => setSearchKey(event.target.value)}><GoSearch/></button>
            </Link>
        </div>
        <div className='searchDisplay'>
            <div className='iconMargin'>
                <div className='groupIcons'> {
                    dogList.filter(dog => dog.name.toLowerCase().includes(keyword.toLowerCase())).map(filteredDog => (
                        <Link to={`/display/${filteredDog.name}`}>

                            <div onClick={() => setName(filteredDog.name)}>
                                <DogIcon name={filteredDog.name} url={filteredDog.url}/>
                            </div>

                        </Link>
                    ))}
                </div>
            </div>
            <div className="categoryCircle"></div>
        </div>
    </div>
  )
}

export default Search