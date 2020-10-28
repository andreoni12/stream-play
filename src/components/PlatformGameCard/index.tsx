import { Component } from "react";
import React from 'react';
import './styles.css';
import { Game } from "../../models/game";
import { Link } from "react-router-dom";

export default class PlatformGameCard extends Component<{ game: Game }> {

    render() {
        return (
            <Link to={`/games/${this.props.game?.id}`}>
                <div className="card" style={{
                    backgroundImage: `url(${this.props.game?.background_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div className="game-title">{this.props.game.name}</div>
                </div>
            </Link>

        )
    }
}