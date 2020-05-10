import ports from "../../ports-list.js";

export default {
  stonesoul: {
    id: "stonesoul",
    name: "Stonesoul Isles",
    ports: [
      ports.saltlions,
      ports.wrack
    ]
  },
  empty: {
    id: "empty",
    name: "Empty Tile",
    ports: []
  },
  demeaux: {
    id: "demeaux",
    name: "Demeaux's Gate",
    ports: [
      ports.demeauxisland
    ]
  },
  corsair: {
    id: "corsair",
    name: "Corsair's Forest",
    ports: [
      ports.gaidersmourn
    ]
  },
  shepherd: {
    id: "shepherd",
    name: "Shepherd's Wash",
    ports: [
      ports.shepherdisles,
      ports.abbeyrock,
      ports.stationiii
    ]
  },
  snares: {
    id: "snares",
    name: "The Snares",
    ports: [
      ports.pigmoteisle
    ]
  }
}