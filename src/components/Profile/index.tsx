import React from 'react';
import { Header } from '../Header';
import './styles.css';
import profile from '../../assets/profile.svg'


const Profile = () => {
    return (
        <>
            <Header />
            <div className="profile-container">
                <div className="profile-title">
                    <img height="120" src={profile} alt="profile" />
                    <h1>Joel Miller</h1>
                </div>
                <div className="profile-data">
                    <div className="username">
                        <h3>USERNAME</h3>
                        <p>j_miller</p>
                    </div>
                    <div className="email">
                        <h3>EMAIL</h3>
                        <p>j_miller@tlou.com</p>
                    </div>
                    <div className="member-since">
                        <h3>MEMBER SINCE</h3>
                        <p>9/11/2020</p>
                    </div>
                </div>
                <div className="profile-plan">
                    <div className="plan">
                        <h3>CURRENT PLAN</h3>
                        <p>Gold</p>
                    </div>
                    <div className="change-plan">
                        <button>CHANGE PLAN</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;