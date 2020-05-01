import { createStore } from "redux";
import portsList from "./ports-list";

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
  fixed: {},
  ports: portsList
}

function setTile(category, tile) {
  return { type: "SET_TILE", category, tile }
}

function setReportCollected(port, value) {
  return { type: "SET_REPORT_COLLECTED", port, value }
}

function clearAllReports() {
  return { type: "CLEAR_ALL_REPORTS" }
}

function reducer(state = initialState, action) {
  let newState = { ...state };
  let newPorts = { ...newState.ports };

  switch (action.type) {
    case "SET_TILE":
      let newTiles = { ...newState[action.category] };
      newTiles[action.tile] = true;
      newState[action.category] = newTiles;
      break;
    case "SET_REPORT_COLLECTED":
      newPorts[action.port].collected = action.value;
      newState.ports = newPorts;
      break;
    case "CLEAR_ALL_REPORTS":
      console.log("hello");

      for (let key in newPorts) {
        newPorts[key].collected = false;
      }
      newState.ports = newPorts;
      break;
    default:
      break;
  }

  return newState;
}

export default createStore(reducer);
export { setTile, setReportCollected, clearAllReports };