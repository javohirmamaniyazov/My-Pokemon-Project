import React from 'react';
import './Navbar.css'


const Navbar = ({pokemonFilter}) => {


  return (
    <>
      <div className='main'>
        <h1 className='Titlesection'>
          <div className="wrapper">
            <div className="container">
              <h1>Pokemon</h1>
            </div>
          </div></h1>
        <div className='search_Area'>
          <input onChange={(e)=> pokemonFilter(e.target.value)} 
            className='search'
            type="text"
            placeholder='search pokemon'
          />
        </div>
      </div>
    </>
  );

};


export default Navbar;