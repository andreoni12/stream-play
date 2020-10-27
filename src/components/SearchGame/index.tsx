import { Component } from "react";

import React from 'react';
import './styles.css'
export class SearchGame extends Component {
    render() {
        return (
            <div className="header">
                <div className="home-title">Stream-Play</div>
                <div className="search">
                    <input type="text" placeholder="Call of Duty"></input>
                </div>
            </div>
        )
    }
}