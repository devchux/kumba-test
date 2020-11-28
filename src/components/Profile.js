import React, {useContext} from 'react'
import profilePics from '../img/user-info.png'
import { GetAPIData } from './GlobalProvider'

function Profile() {
    const { user } = useContext(GetAPIData)
    return (
        <main>
            <div className="profile">
                <div className="logo">
                    <img src={profilePics} alt="user-img" />
                </div>
                <div className="user-info">
                    <h3>Name: {user ? user.name : 'Loading...'}</h3>
                    <p>{user ? user.about : 'Loading...'}</p>
                    <p>Phone: {user ? user.phone : 'Loading...'}</p>
                    <p>Address: {user ? user.address : 'Loading...'}</p>
                    <div className="likes">
                        {user ? user.likes.map(item => (<span key={item}>{item}</span>)) : 'No likes'}
                    </div>
                    <div className="dislikes">
                    {user ? user.dislikes.map(item => (<span key={item}>{item}</span>)) : 'No dislikes'}
                    </div>
                </div>
            </div>
         </main>
    )
}

export default Profile
