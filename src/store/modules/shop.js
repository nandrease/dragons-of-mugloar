import axios from "axios";
import {
  baseUrl,
  FETCH_SHOP_ITEMS,
  UPDATE_GAME_STATUS
} from "../mutation-types";

const state = {
  items: []
};

const getters = {
  items: state => state.items
};

const mutations = {
  FETCH_SHOP_ITEMS(state, items) {
    state.items = items;
  }
};

const actions = {
  fetchShopListings({ commit, dispatch, getters }) {
    const gameId = getters.game.gameId;
    axios
      .get(`${baseUrl}/api/v2/${gameId}/shop`)
      .then(response => {
        commit(FETCH_SHOP_ITEMS, response.data);
      })
      .catch(err => dispatch("errorMessage", err));
  },
  buyItem({ commit, dispatch, getters }, itemId) {
    const gameId = getters.game.gameId;
    axios
      .post(`${baseUrl}/api/v2/${gameId}/shop/buy/${itemId}`)
      .then(response => {
        if (response.data.shoppingSuccess) {
          dispatch("successMessage", "Item bought");
        } else {
          dispatch("errorMessage", "Not enough gold");
        }
        commit(UPDATE_GAME_STATUS, response.data);
      })
      .catch(err => {
        dispatch("errorMessage", err);
      });
  }
};

export default { state, mutations, getters, actions };
