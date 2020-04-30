import { createStore } from "redux";

const initialState = {
  northTiles: {
    palmerston: false,
    frostfound: false,
    void: false,
    stormbones: false
  },
  northEastTiles: {
    voices: false,
    rattsey: false,
    lilies: false,
    steppes: false,
    coral: false
  },
  eastTiles: {
    hands: false,
    calumnies: false,
    chelonate: false,
    gossamer: false
  },
  southTiles: {
    promised: false,
    eye: false,
    myceligaea: false,
    autumn: false
  }
}

function setTile(category, tile) {
  return { type: "SET_TILE", category, tile }
}

function reducer(state = initialState, action) {
  let newState = { ...state };

  switch (action.type) {
    case "SET_TILE":
      let newTiles = { ...newState[action.category] };
      newTiles[action.tile] = true;
      newState[action.category] = newTiles;
      break;
    default:
      break;
  }

  return newState;
}

export default createStore(reducer);
export { setTile };