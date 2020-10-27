import React, { Component } from 'react';
import axios from 'axios';
import { PlatformGame } from '../../models/platform-game';
import PlatformGameCard from '../PlatformGameCard';
import './styles.css';
import { SearchGame } from '../SearchGame';

export default class Home extends Component {

    state = {
        weekGames: Array<PlatformGame>(),
        greatestGames: Array<PlatformGame>(),
    }

    componentDidMount() {
        this.retrieveGames();
    }

    async thisWeekGames() {
        let data = {};
        await axios.get(`https://rawg.io/api/games/lists/recent-games?discover=true&ordering=-added&page_size=20`).then(
            response => {
                data = response.data.results
            });
        return data;
    }

    async greatestGames() {
        let data = {};
        await axios.get(`https://rawg.io/api/games/lists/greatest?discover=true&ordering=-added&page_size=20`).then(
            response => {
                data = response.data.results
            });
        return data;
    }

    async retrieveGames() {
        const weekGames = await this.thisWeekGames();
        const greatest = await this.greatestGames();
        this.setState({ weekGames: weekGames, greatestGames: greatest });
    }

    render() {
        return (
            <>
                <SearchGame></SearchGame>
                
                <div className="this-week">
                    <h3 className="list-title">Releasing this week:</h3>
                    <div className="platform-list" style={{ width: this.state.weekGames.length * 270 }}>
                        {this.state.weekGames != null && this.state.weekGames.map((game, key) => (<PlatformGameCard key={key} game={game}></PlatformGameCard>))}
                    </div>
                </div>

                <div className="greatest">
                    <h3 className="list-title">Greatest games:</h3>
                    <div className="platform-list" style={{ width: this.state.greatestGames.length * 270 }}>
                        {this.state.greatestGames != null && this.state.greatestGames.map((game, key) => (<PlatformGameCard key={key} game={game}></PlatformGameCard>))}
                    </div>
                </div>
            </>
        )
    }
}
