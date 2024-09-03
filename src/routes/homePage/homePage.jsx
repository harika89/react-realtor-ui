import React from 'react';
import './homePage.scss';
import SearchBar from "../../components/searchBar/searchBar";
//import './searchBar.scss';

function HomePage() {
    return (
        <div className='homePage'>
            
            <div className='textContainer'>
                <div className='wrapper'>
                    <h1>
                        Get Your Dream Place.
                    </h1>
                    <h2>
                          Find Real Estate.
                    </h2>

                    <SearchBar/>
                    
                    <div className='boxes'>
                        <div className='box'>
                            <h1>1000+</h1>
                            <h2>Property Sales</h2>
                        </div>
                        <div className='box'>
                            <h1>1200+</h1>
                            <h2>Clients</h2>
                        </div>
                        <div className='box'>
                            <h1>Find Yours Now!</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className='imgContainer'>
                <img src='/fpbg.png' alt='bg'/>
            </div>
        </div>
    );
}

export default HomePage;