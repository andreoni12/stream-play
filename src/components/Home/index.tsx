import React, { Component } from 'react';
import PlatformGameCard from '../PlatformGameCard';
import './styles.css';
import { Header } from '../Header';
import Loader from '../Loader';
import { Game } from '../../models/game'
import FeaturedGame from '../FeaturedGame';
import rawg from '../../providers/rawg';

export default class Home extends Component {
    state = {
        weekGames: Array<Game>(),
        greatestGames: Array<Game>(),
        loading: false,
        featuredLeft: {} as Game,
        featuredRight: {} as Game,
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.retrieveGames();
    }

    async retrieveGames() {
        const weekGames = await rawg.thisWeekGames();
        const greatest = await rawg.greatestGames();
        const featuredLeft = await rawg.featuredGames(0);
        const featuredRight = await rawg.featuredGames(1);
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
                {!this.state.loading ? <>
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
                        <div className="platform-list">
                            {this.state.weekGames != null && this.state.weekGames.map((game, key) => (<PlatformGameCard key={key} game={game} />))}
                        </div>
                    </div>

                    <div className="greatest">
                        <h4 className="list-title">GREATEST</h4>
                        <div className="platform-list">
                            {this.state.greatestGames != null && this.state.greatestGames.map((game, key) => (<PlatformGameCard key={key} game={game} />))}
                        </div>
                    </div>
                </> : <Loader />}
            </>
        )
    }
}
