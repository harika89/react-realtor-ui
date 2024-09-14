import { useState } from 'react';
import './navbar.scss'
import { Link } from 'react-router-dom';


function Navbar() {
    const {open,setOpen} = useState(false)

    const user = true;
    return (
        <nav>
            <div className="left">
                <a href='/' className='logo'>
                    <img src='/logo.png' alt='logo'></img>
                    <span>RealtorWorld</span>
                </a>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Agents</a>
            </div>
            <div className="right">
                {user ? (
                    <div className='user'>
                        <img
                        src="/profile.png"
                        alt="">
                        </img>
                        <span>John Doe</span>   
                        <Link to={'/profile'} className='profile'>
                            <div className='notification'>2</div>
                            <span>Profile</span>
                        </Link> 
                  </div>
                ) : (
                    <>
                    <a href='/'>Sign in</a>
                    <a href='/'className='register'>Sign Up</a>        
                    </>
                )}
                <div className='menuIcon'> 
                    <img src='/menu.png' alt='menu'
                    onClick={() => setOpen((prev) => !prev)}
                    />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Contact</a>
                    <a href='/'>Agents</a>
                    <a href='/'>Sign in</a>
                    <a href='/'>Sign Up</a>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
