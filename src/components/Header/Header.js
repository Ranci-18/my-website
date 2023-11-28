import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
        <nav className='App-navbar'>
        <ul>
            <li><svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg></li>
            <a href='#home'><li>Home</li></a>
            <a href='#about'><li>About Me</li></a>
            <a href='#portfolio'><li>Portfolio</li></a>
            <a href='#resume'><li>Resume/CV</li></a>
            <a href='#testimonials'><li>Testimonials</li></a>
            <a href='#skills'><li>Skills</li></a>
            <a href='#process'><li>My Process</li></a>
            <a href='#contact'><li>Contact Me</li></a>
            <li><input type='search' placeholder='Search...' /></li>
            <li><button rounded>Search</button></li>
        </ul>
        </nav>
    </div>
  )
}
