import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Fetchstory from './Fetchstory';
import Homeposts from './Homeposts';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-900 text-white sm:min-h-screen"> {/* Apply background color here */}
            <nav className='home-nav'>
                {/* <img src='../assets/instagram.png'/> */}
                <h1>Instagram</h1>
                <ul className='homenav-list'>
                    <li>notification</li>
                    <li onClick={()=>navigate('/messages')}>message</li>
                </ul>
            </nav>
            <hr style={{ marginTop: '3%' }} />

            <Fetchstory />
            <hr style={{ marginTop: '3%' }} />

            {/* <div className='footer'>
                <ul>
                    <li onClick={() => navigate('/home')}>Home</li>
                    <li onClick={() => navigate('/search')}>Search</li>
                    <li onClick={() => navigate('/uploadpost')}>Add</li>
                    <li onClick={() => navigate('/reels')}>Reels</li>
                    <li onClick={() => navigate('/profile')}>profile</li>
                </ul>
            </div> */}
            <Homeposts />

            <Footer />
        </div>
    );
}
