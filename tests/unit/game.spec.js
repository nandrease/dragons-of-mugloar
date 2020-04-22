import gameModule from "../../src/store/modules/game";

const { getters, mutations } = gameModule;
const { INIT_GAME, RESTART_GAME } = mutations;

describe("game", () => {
  describe("mutations", () => {
    it("INIT_GAME", () => {
      const state = {};

      const newGame = {
        gameId: "cCGndBGT",
        lives: 3,
        gold: 0,
        level: 0,
        score: 0,
        highScore: 265272,
        turn: 0
      };

      INIT_GAME(state, newGame);

      expect(state.game).toEqual(newGame);
    });

    it("RESTART_GAME", () => {
      const state = {
        game: {
          some: "gibberish"
        }
      };
      RESTART_GAME(state);
      expect(state).toEqual({
        game: null
      });
    });
  });

  describe("getters", () => {
    const state = {
      game: {
        gameId: 109023
      }
    };
    const result = getters.game(state);
    expect(result).toEqual({
      gameId: 109023
    });
  });
});
