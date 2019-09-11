import Vuex from "vuex";
import Vue from 'vue';
import {getGames} from '../services/GameService';

Vue.use(Vuex);


export const FETCH_GAME = "FETCH_GAME";
export const FETCH_GAME_SUCCESS = "FETCH_GAME_SUCCESS";
export const ADD_GAME = "ADD_GAME";
export const ADD_GAME_SUCCESS = "ADD_GAME_SUCCESS";

export const store = new Vuex.Store({
    state: {
        games: []
    },
    mutations: {
        [FETCH_GAME_SUCCESS]: function (state, games) {
            state.games = [...games];
        },
        [ADD_GAME_SUCCESS]: function (state, game) {
            state.games = [...state.games, game];
        }
    },
    actions: {
        [FETCH_GAME]: async function ({commit}) {
            let games = await getGames();
            commit(FETCH_GAME_SUCCESS, games);
        },
        [ADD_GAME]: function ({commit}, game) {
            commit(ADD_GAME_SUCCESS, game);
        },
    }
});