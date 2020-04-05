import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { INIT_GAME } from "./mutation-types";

Vue.use(Vuex);
const baseUrl = "https://dragonsofmugloar.com";

export default new Vuex.Store({
  state: {
    game: null
  },
  mutations: {
    INIT_GAME(state, game) {
      state.game = game;
    }
  },
  actions: {
    startGame({ commit }) {
      axios
        .post(`${baseUrl}/api/v2/game/start`)
        .then(response => {
          console.log({ response });
          commit(INIT_GAME, response.data);
        })
        .catch(err => console.log("Error: ", err));
    }
  },
  modules: {}
});
