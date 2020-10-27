import { Component } from "react";
import { PlatformGame } from "../../models/platform-game";

import React from 'react';
import './styles.css';

export default class PlatformGameCard extends Component<{ game: PlatformGame }> {

    render() {
        return (
            <div className="card" style={{
                backgroundImage: `url(${this.props.game?.background_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="game-title">{this.props.game.name}</div>
            </div>
        )
    }
}