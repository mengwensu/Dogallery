import React, { Component }  from 'react';
export default function NavBar() {
    return (
        <nav className="nav">
            <a href="/" className="siteTitle">Dogallery</a>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/categories">Categories</a>
                </li>
                <li>
                    <a href="/faq">FAQ</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
        
            </ul>
        </nav>
    )
    
}