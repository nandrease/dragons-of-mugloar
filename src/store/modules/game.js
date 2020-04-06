import axios from "axios";
import { baseUrl, INIT_GAME } from "../mutation-types";

const state = {
  game: null
};

const getters = {
  game: state => state.game
};

const mutations = {
  INIT_GAME(state, game) {
    state.game = game;
  },
  UPDATE_GAME_STATUS(state, status) {
    state.game = { ...state.game, ...status };
  }
};

const actions = {
  startGame({ commit, dispatch }) {
    axios
      .post(`${baseUrl}/api/v2/game/start`)
      .then(response => {
        commit(INIT_GAME, response.data);
      })
      .catch(err => dispatch("errorMessage", err));
  }
};

export default { state, getters, mutations, actions };
