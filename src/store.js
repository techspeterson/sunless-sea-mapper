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
  ports: portsList,
  hideCollected: false
}

function loadData() {
  return { type: "LOAD_DATA" }
}

function setTile(category, tile) {
  return { type: "SET_TILE", category, tile }
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
    case "SET_TILE":
      let newTiles = { ...newState[action.category] };
      newTiles[action.tile] = true;
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
export { loadData, setTile, setReportCollected, toggleHideCollected, clearAllReports };