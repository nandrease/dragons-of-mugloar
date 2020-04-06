import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { INIT_GAME, FETCH_ADS, UPDATE_ADS, UPDATE_GAME_STATUS } from "./mutation-types";

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
    },
    UPDATE_ADS(state, adId) {
      state.ads = state.ads.filter(ad => ad.adId != adId);
    },
    UPDATE_GAME_STATUS(state, status) {
      state.game = { ...state.game, ...status };
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
      axios
        .get(`${baseUrl}/api/v2/${state.game.gameId}/messages`)
        .then(response => {
          commit(FETCH_ADS, response.data);
        })
        .catch(err => console.log("Error: ", err));
    },
    solveAd({ state, commit, dispatch }, adId) {
      console.log({ adId });
      axios
        .post(`${baseUrl}/api/v2/${state.game.gameId}/solve/${adId}`)
        .then(response => {
          if (response.data.success) {
            console.log("Success:", response.data.message);
            commit(UPDATE_ADS, adId);
          } else {
            console.log("FAILED: ", response.data.message);
            commit(UPDATE_ADS, adId);
          }
          const { lives, gold, level, score, turn } = response.data;
          commit(UPDATE_GAME_STATUS, { lives, gold, level, score, turn });
          dispatch("fetchAds");
        })
        .catch(err => {
          console.log(err, err.response.data.error);
        });
    }
  },
  modules: {}
});
