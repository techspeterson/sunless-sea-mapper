import ports from "../../ports-list.js";

export default {
  palmerston: {
    id: "palmerston",
    name: "Palmerston's Reach",
    ports: {
      mountpalmerston: ports.mountpalmerston,
      anthe: ports.anthe
    }
  },
  frostfound: {
    id: "frostfound",
    name: "Frostfound",
    ports: {
      frostfound: ports.frostfound
    }
  },
  void: {
    id: "void",
    name: "Void's Approach",
    ports: {
      avidhorizon: ports.avidhorizon,
      chapeloflights: ports.chapeloflights
    }
  },
  stormbones: {
    id: "stormbones",
    name: "Stormbones",
    ports: {
      undercrow: ports.undercrow
    }
  }
}