import React, { Component } from 'react';
import axios from 'axios';
import { PlatformGame } from '../../models/platform-game';
import PlatformGameCard from '../PlatformGameCard';
import './styles.css';
import { Header } from '../Header';
import Loader from '../Loader';
import { Game } from '../../models/game'

export default class Home extends Component {
    state = {
        weekGames: Array<PlatformGame>(),
        greatestGames: Array<PlatformGame>(),
        loading: false,
        featuredLeft: {} as Game,
    }

    componentDidMount() {
        this.setState({ loading: true })
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

    randomNumber(min: number, max: number): number {  
        let number =  Math.random() * (max - min) + min; 
        return Math.floor(number);
    } 

    async featuredGames() {
        let data = {};
        let random = this.randomNumber(1, 460595);
        await axios.get(`https://api.rawg.io/api/games/${random}?key=bce091fd6d224303aa8e22a86acc77c1`).then(
            response => {
                data = response.data;
            });
        return data;
    }

    async retrieveGames() {
        const weekGames = await this.thisWeekGames();
        const greatest = await this.greatestGames();
        const featured = await this.featuredGames();
        this.setState({ weekGames: weekGames, greatestGames: greatest, featuredLeft: featured, loading: false });
    }

    render() {
        return (
            <>
                <Header></Header>
                <div className="featured-games">
                    <div className="left-game">
                        
                    </div>
                </div>

                <div className="this-week">
                    <h4 className="list-title">RELEASING THIS WEEK</h4>
                    {!this.state.loading ?
                        <div className="platform-list" style={{ width: this.state.weekGames.length * 270 }}>
                            {this.state.weekGames != null && this.state.weekGames.map((game, key) => (<PlatformGameCard key={key} game={game}></PlatformGameCard>))}
                        </div> : <Loader></Loader>}
                </div>

                <div className="greatest">
                    <h4 className="list-title">GREATEST</h4>
                    {!this.state.loading ? <div className="platform-list" style={{ width: this.state.greatestGames.length * 270 }}>
                        {this.state.greatestGames != null && this.state.greatestGames.map((game, key) => (<PlatformGameCard key={key} game={game}></PlatformGameCard>))}
                    </div> : <Loader></Loader>}
                </div>
            </>
        )
    }
}
