import React, { Component } from 'react';
import axios from 'axios';
import { PlatformGame } from '../../models/platform-game';
import PlatformGameCard from '../PlatformGameCard';
import './styles.css';
import { Header } from '../Header';
import Loader from '../Loader';
import { Game } from '../../models/game'
import FeaturedGame from '../FeaturedGame';

export default class Home extends Component {
    state = {
        weekGames: Array<PlatformGame>(),
        greatestGames: Array<PlatformGame>(),
        loading: false,
        featuredLeft: {} as Game,
        featuredRight: {} as Game,
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.retrieveGames();
    }

    async thisWeekGames() {
        let data = {};
        await axios.get(`https://rawg.io/api/games/lists/recent-games?discover=true&ordering=-added&page_size=8`).then(
            response => {
                data = response.data.results
            });
        return data;
    }

    async greatestGames() {
        let data = {};
        await axios.get(`https://rawg.io/api/games/lists/greatest?discover=true&ordering=-added&page_size=8`).then(
            response => {
                data = response.data.results
            });
        return data;
    }

    async featuredGames(position: number) {
        let data = {};
        await axios.get(`https://rawg.io/api/games/lists/main?discover=true&ordering=-relevance&page_size=2&key=bce091fd6d224303aa8e22a86acc77c1`).then(
            response => {
                data = response.data.results[position];
            });
        return data;
    }

    async retrieveGames() {
        const weekGames = await this.thisWeekGames();
        const greatest = await this.greatestGames();
        const featuredLeft = await this.featuredGames(0);
        const featuredRight = await this.featuredGames(1);
        this.setState({
            weekGames: weekGames,
            greatestGames: greatest,
            featuredLeft: featuredLeft,
            featuredRight: featuredRight,
            loading: false
        });
    }

    render() {
        return (
            <>
                <Header></Header>
                <div className="featured-games">
                    <div className="left-game">
                        <FeaturedGame game={this.state.featuredLeft} />
                    </div>
                    <div className="right-game">
                        <FeaturedGame game={this.state.featuredRight} />
                    </div>
                </div>

                <div className="this-week">
                    <h4 className="list-title">RELEASING THIS WEEK</h4>
                    {!this.state.loading ?
                        <div className="platform-list">
                            {this.state.weekGames != null && this.state.weekGames.map((game, key) => (<PlatformGameCard key={key} game={game} />))}
                        </div> : <Loader />}
                </div>

                <div className="greatest">
                    <h4 className="list-title">GREATEST</h4>
                    {!this.state.loading ? <div className="platform-list">
                        {this.state.greatestGames != null && this.state.greatestGames.map((game, key) => (<PlatformGameCard key={key} game={game} />))}
                    </div> : <Loader />}
                </div>
            </>
        )
    }
}
