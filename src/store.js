import { createStore } from "redux";

const initialState = {
  west: {
    stonesoul: false,
    empty: false,
    demeaux: false,
    corsair: false,
    shepherd: false,
    snares: false
  },
  north: {
    palmerston: false,
    frostfound: false,
    void: false,
    stormbones: false
  },
  northeast: {
    voices: false,
    rattsey: false,
    lilies: false,
    steppes: false,
    coral: false
  },
  east: {
    hands: false,
    calumnies: false,
    chelonate: false,
    gossamer: false
  },
  south: {
    promised: false,
    eye: false,
    myceligaea: false,
    autumn: false
  },
  fixed: {}
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