import React, { Component } from "react";
import { Game } from "../../models/game";
import { Header } from "../Header";
import axios from 'axios';
import './styles.css';

export default class GameInfo extends Component<{ id: string }> {

    state = {
        game: {} as Game,
    }

    async findGame() {
        let data = {};
        await axios.get(`https://rawg.io/api/games/${this.props.id}?key=bce091fd6d224303aa8e22a86acc77c1`).then(
            response => {
                data = response.data;
            });
        return data;
    }

    componentDidMount() {
        this.findGame().then((data) => this.setState({ game: data }));
    }

    render() {
        return (
            <>
                <Header />
                <div className="game-info-container">
                    <div className="title">
                        <div>{this.state.game.name}</div>
                        <img src={this.state.game.background_image} alt="background"></img>
                    </div>
                    <div className="first-row">
                        <div className="about">
                            <h3>ABOUT</h3>
                            <p>{this.state.game.description_raw}</p>
                        </div>
                        <div className="platforms">
                            <h3>PLATFORMS</h3>
                            {this.state.game.parent_platforms?.map(game => <p>{game.name}</p>)}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}