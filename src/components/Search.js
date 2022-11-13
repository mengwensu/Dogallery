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
            {(searchKey === "" || searchKey === undefined)? (
                        // <Link to={`/search/${searchKey}`}>
                            <div>
                                <button className='search'><GoSearch/></button>
                            </div>
                        // </Link>
                    ):(
                        <Link to={`/search/${searchKey}`}>
                            <div>
                                <button className='search' onClick={(event) => setSearchKey(event.target.value)}><GoSearch/></button>

                            </div>
                        </Link>
                    )}
        </div>
        <div className='searchDisplay'>
            <div className='iconMargin'>
                <div className='groupIcons'> {
                        dogList.filter(dog => {
                                if (keyword !== undefined && dog.name.toLowerCase().includes(keyword.toLowerCase())) {
                                    return true
                                } else {
                                    return false
                                }
                        }).map(filteredDog => (
                        
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