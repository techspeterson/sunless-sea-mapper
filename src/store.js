import { createStore } from "redux";
import portsList from "./ports-list";

const initialState = {
  west: {
    stonesoul: false,
    empty: false,
    demeaux: false,
    corsair: false,
    shepherd: false,
    snares: false,
    7: null,
    8: null,
    13: null,
    14: null,
    19: null,
    20: null
  },
  north: {
    palmerston: false,
    frostfound: false,
    void: false,
    stormbones: false,
    1: null,
    2: null,
    3: null,
    4: null
  },
  northeast: {
    voices: false,
    rattsey: false,
    lilies: false,
    steppes: false,
    coral: false,
    9: null,
    10: null,
    15: null,
    16: null,
    21: null
  },
  east: {
    hands: false,
    calumnies: false,
    chelonate: false,
    gossamer: false,
    11: null,
    17: null,
    23: null,
    29: null
  },
  south: {
    promised: false,
    eye: false,
    myceligaea: false,
    autumn: false,
    22: null,
    25: null,
    26: null,
    27: null,
    28: null
  },
  fixed: {},
  ports: portsList,
  hideCollected: false
}

function loadData() {
  return { type: "LOAD_DATA" }
}

function resetData() {
  return { type: "RESET_DATA" }
}

function setTile(category, tile, tileIndex) {
  return { type: "SET_TILE", category, tile, tileIndex }
}

function setReportCollected(port, value) {
  return { type: "SET_REPORT_COLLECTED", port, value }
}

function toggleHideCollected(value) {
  return { type: "HIDE_COLLECTED", value }
}

function clearAllReports() {
  return { type: "CLEAR_ALL_REPORTS" }
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function reducer(state = initialState, action) {
  let newState = { ...state };
  let newPorts = { ...newState.ports };

  switch (action.type) {
    case "LOAD_DATA":
      for (let key in newState) {
        const item = localStorage.getItem(key);
        if (item) {
          newState[key] = JSON.parse(item);
        }
      }
      break;
    case "RESET_DATA":
      console.log("RESET")
      newState = { ...initialState };
      newState.ports = { ...portsList };
      for (let key in initialState) {
        setLocalStorage(key, initialState[key]);
      }
      break;
    case "SET_TILE":
      let newTiles = { ...newState[action.category] };
      newTiles[action.tile] = true;
      newTiles[action.tileIndex] = action.tile;
      newState[action.category] = newTiles;
      setLocalStorage(action.category, newTiles);
      break;
    case "SET_REPORT_COLLECTED":
      newPorts[action.port].collected = action.value;
      newState.ports = newPorts;
      setLocalStorage("ports", newPorts);
      break;
    case "HIDE_COLLECTED":
      newState.hideCollected = action.value;
      setLocalStorage("hideCollected", action.value)
      break;
    case "CLEAR_ALL_REPORTS":
      for (let key in newPorts) {
        newPorts[key].collected = false;
      }
      newState.ports = newPorts;
      setLocalStorage("ports", newPorts);
      break;
    default:
      break;
  }

  return newState;
}

export default createStore(reducer);
export { loadData, resetData, setTile, setReportCollected, toggleHideCollected, clearAllReports };