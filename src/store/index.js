import Vue from "vue";
import Vuex from "vuex";
import messages from "./modules/messages";
import game from "./modules/game";
import ads from "./modules/ads";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    messages,
    game,
    ads
  }
});
