import React from 'react';
import './Profile.css'
import profile from '../../Images/profile.jpg'
const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile-info'>
                <img src={profile} alt="" />
                <div>
                    <p className='profile-name'>Rakibul Hasan</p>
                    <small>Gazipura, Tongi</small>
                </div>
            </div>
            <div className='body-cart'>
               <div>
                <h2>75<small className='small-text'>kg</small></h2>
                <p>Weight</p>
               </div>
               <div>
                <h2>5.6</h2>
                <p>Height</p>
               </div>
               <div>
                <h2>75<small className='small-text'>years</small></h2>
                <p>Age</p>
               </div>
            </div>
        </div>
    );
};

export default Profile;