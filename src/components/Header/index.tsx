import { Component } from "react";
import React from 'react';
import './styles.css';
import logo from '../../assets/stream-play.svg'
import profile from '../../assets/profile.svg'
import { Link } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="website-logo">
                    <Link to="/">
                        <img height="60" src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="profile">
                    <div className="profile-info">
                        <FavoriteIcon></FavoriteIcon>
                        <ChatBubbleIcon></ChatBubbleIcon>
                        <NotificationsActiveIcon></NotificationsActiveIcon>
                        <h4>Joel Miller</h4>
                    </div>
                    <img id="profile-img" height="60" src={profile} alt="profile" />
                </div>
            </header>
        )
    }
}