import React from "react";
import { Game } from "../../models/game";
import './styles.css';

export default class FeaturedGame extends React.Component<{ game: Game }> {
    render() {
        return (
            <div className="featured-card" style={{
                backgroundImage: `url(${this.props.game?.background_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <h3>{this.props.game?.name}</h3>
            </div>
        )
    }
}