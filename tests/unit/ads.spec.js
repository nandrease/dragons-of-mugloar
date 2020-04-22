import adsModule from "../../src/store/modules/ads";

const { getters, mutations } = adsModule;
const { SET_ADS } = mutations;

describe("ads", () => {
  describe("getters", () => {
    it("returns ads from the state", () => {
      const state = {
        ads: [
          {
            adId: "TRWjqY1F",
            message: "Message 1",
            reward: 39,
            expiresIn: 7,
            probability: "Sure thing"
          },
          {
            adId: "IYTSKIvM",
            message: "Message",
            reward: 25,
            expiresIn: 7,
            probability: "Walk in the park"
          }
        ]
      };

      const result = getters.ads(state);
      expect(result).toEqual(state.ads);
      expect(result.length).toBe(2);
    });
  });

  describe("mutations", () => {
    it("SET_ADS", () => {
      const state = {};

      const newAds = [
        {
          adId: "TRWjqY1F",
          message: "Message 1",
          reward: 39,
          expiresIn: 7,
          probability: "Sure thing"
        },
        {
          adId: "IYTSKIvM",
          message: "Message",
          reward: 25,
          expiresIn: 7,
          probability: "Walk in the park"
        }
      ];

      SET_ADS(state, newAds);
      expect(state.ads).toEqual(newAds);
    });
  });
});
