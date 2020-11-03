import axios from 'axios';

const API_KEY = 'bce091fd6d224303aa8e22a86acc77c1';

export default {
    thisWeekGames: async function () {
        try {
            const response = await axios.get(`https://rawg.io/api/games/lists/recent-games?discover=true&ordering=-added&page_size=8`);
            return response.data.results;
        } catch (error) {
            throw error;
        }
    },

    greatestGames: async function () {
        try {
            const response = await axios.get(`https://rawg.io/api/games/lists/greatest?discover=true&ordering=-added&page_size=8`);
            return response.data.results;
        } catch (error) {
            throw error;
        }
    },

    featuredGames: async function (position: number) {
        try {
            const response = await axios.get(`https://rawg.io/api/games/lists/main?discover=true&ordering=-relevance&page_size=2&key=${API_KEY}`);
            return response.data.results[position];
        } catch (error) {
            throw error;
        }
    },

    retrieveGame: async function (gameId: string) {
        const response = await axios.get(`https://rawg.io/api/games/${gameId}?key=${API_KEY}`);
        return response.data;
    },
}