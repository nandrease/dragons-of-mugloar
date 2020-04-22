import shop from "../../src/store/modules/shop";

const { mutations, getters } = shop;
const { FETCH_SHOP_ITEMS } = mutations;

describe("shop", () => {
  describe("mutations", () => {
    it("FETCH_SHOP_ITEMS", () => {
      // mock state
      const state = {
        items: []
      };
      const items = [
        {
          id: "hpot",
          name: "Healing potion",
          cost: 50
        },
        {
          id: "cs",
          name: "Claw Sharpening",
          cost: 100
        },
        {
          id: "gas",
          name: "Gasoline",
          cost: 1000
        }
      ];
      // apply mutation
      FETCH_SHOP_ITEMS(state, items);
      // assert result
      expect(state.items).toEqual(items);
      expect(state.items.length).toBe(items.length);
    });
  });

  describe("getters", () => {
    it("returns items in the shop", () => {
      // mock state
      const state = {
        items: [
          {
            id: "hpot",
            name: "Healing potion",
            cost: 50
          },
          {
            id: "cs",
            name: "Claw Sharpening",
            cost: 100
          }
        ]
      };
      // get the result from the getter
      const result = getters.items(state);

      // assert the result
      expect(result).toEqual(state.items);
    });
  });
});
