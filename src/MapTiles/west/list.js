import ports from "../../ports-list.js";

export default {
  stonesoul: {
    id: "stonesoul",
    name: "Stonesoul Isles",
    ports: {
      saltlions: ports.saltlions,
      wrack: ports.wrack
    }
  },
  empty: {
    id: "empty",
    name: "Empty Tile",
    ports: {}
  },
  demeaux: {
    id: "demeaux",
    name: "Demeaux's Gate",
    ports: {
      demeauxisland: ports.demeauxisland
    }
  },
  corsair: {
    id: "corsair",
    name: "Corsair's Forest",
    ports: {
      gaidersmourn: ports.gaidersmourn
    }
  },
  shepherd: {
    id: "shepherd",
    name: "Shepherd's Wash",
    ports: {
      shepherdisles: ports.shepherdisles,
      abbeyrock: ports.abbeyrock,
      stationiii: ports.stationiii
    }
  },
  snares: {
    id: "snares",
    name: "The Snares",
    ports: {
      pigmoteisle: ports.pigmoteisle
    }
  }
}