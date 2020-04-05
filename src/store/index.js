import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { INIT_GAME, FETCH_ADS } from "./mutation-types";

Vue.use(Vuex);
const baseUrl = "https://dragonsofmugloar.com";

export default new Vuex.Store({
  state: {
    game: null,
    ads: []
  },
  getters: {
    ads: state => {
      return state.ads;
    }
  },
  mutations: {
    INIT_GAME(state, game) {
      state.game = game;
    },
    FETCH_ADS(state, ads) {
      state.ads = ads;
    }
  },
  actions: {
    startGame({ commit }) {
      axios
        .post(`${baseUrl}/api/v2/game/start`)
        .then(response => {
          commit(INIT_GAME, response.data);
        })
        .catch(err => console.log("Error: ", err));
    },
    fetchAds({ state, commit }) {
      console.log("fetchAds", state);
      axios
        .get(`${baseUrl}/api/v2/${state.game.gameId}/messages`)
        .then(response => {
          commit(FETCH_ADS, response.data);
        })
        .catch(err => console.log("Error: ", err));
    }
  },
  modules: {}
});
