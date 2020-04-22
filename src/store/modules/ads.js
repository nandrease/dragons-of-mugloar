import axios from "axios";
import { baseUrl, SET_ADS, UPDATE_GAME_STATUS } from "../mutation-types";

const state = {
  ads: []
};

const getters = {
  ads: state => state.ads
};

const mutations = {
  SET_ADS(state, ads) {
    state.ads = ads;
  }
};

const actions = {
  fetchAds({ commit, dispatch, getters }) {
    const gameId = getters.game.gameId;
    axios
      .get(`${baseUrl}/api/v2/${gameId}/messages`)
      .then(response => {
        commit(SET_ADS, response.data);
      })
      .catch(err => {
        dispatch("errorMessage", err.response.data.status);
      });
  },
  solve({ commit, dispatch, getters }, adId) {
    const gameId = getters.game.gameId;
    axios
      .post(`${baseUrl}/api/v2/${gameId}/solve/${adId}`)
      .then(response => {
        if (response.data.success) {
          dispatch("successMessage", response.data.message);
        } else {
          dispatch("errorMessage", response.data.message);
        }
        commit(UPDATE_GAME_STATUS, response.data);
        dispatch("fetchAds");
      })
      .catch(err => {
        dispatch("errorMessage", err);
      });
  }
};

export default { state, mutations, getters, actions };
