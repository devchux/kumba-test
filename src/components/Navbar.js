import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GetAPIData } from './GlobalProvider';


function Navbar() {
    const { restaurant } = useContext(GetAPIData)
    return (
        <div className="header-nav">
            <div className="restaurant-info">
            {restaurant ? (
                <>
                <h2>{restaurant.name}</h2>
                <h4>{restaurant.street}, {restaurant.city}, {restaurant.state}</h4>
                <p>Zipcode:- {restaurant.zipcode}</p>
                </>
            ): 'Loading...'}
            </div>
            <nav>
                <ul>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/">Orders</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
