import React, { Component } from "react";
import { Game } from "../../models/game";
import { Header } from "../Header";
import axios from 'axios';
import './styles.css';
import { ParentPlatform } from "../../models/parent-platform";
import playstation from "../../assets/playstation.svg";
import xbox from "../../assets/xbox.svg";
import pc from "../../assets/microsoft.svg";
import { Genre } from "../../models/genre";

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

    async buildGameObject() {
        const game = await this.findGame();
        this.setState({ game: game });
    }

    getPlatformIcon(platform: ParentPlatform) {
        switch (platform.platform.slug) {
            case 'playstation':
                return <img width="30" height="30" src={playstation} alt='playstation'></img>
            case 'xbox':
                return <img width="30" height="30" src={xbox} alt='xbox'></img>
            case 'pc':
                return <img width="30" height="30" src={pc} alt='playstation'></img>
        }
    }

    returnGenres(genres: Genre[]): string {
        let result = new Array<string>();
        genres.forEach((genre) => result.push(genre.name));
        return result.join(', ');
    }

    componentDidMount() {
        this.buildGameObject();
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
                        <div className="platforms">
                            <h3>PLATFORMS</h3>
                            {this.state.game.parent_platforms?.map(platform => this.getPlatformIcon(platform))}
                        </div>
                        <div className="released">
                            <h3>RELEASED IN</h3>
                            {this.state.game.released}
                        </div>
                        <div className="genres">
                            <h3>GENRES</h3>
                            {this.state.game?.genres && this.returnGenres(this.state.game?.genres)}
                        </div>
                        <div className="metacritic">
                            <h3>METACRITIC</h3>
                            {this.state.game?.metacritic}
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="about">
                            <h3>ABOUT</h3>
                            <p>{this.state.game.description_raw}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}