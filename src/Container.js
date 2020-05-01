import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadData } from "./store";
import TileContainer from "./TileContainer";
import PortReports from "./PortReports";

import fixedTilesList from "./MapTiles/fixed/list";
import northTilesList from "./MapTiles/north/list";
import northEastTilesList from "./MapTiles/northeast/list";
import eastTilesList from "./MapTiles/east/list";
import southTilesList from "./MapTiles/south/list";
import westTilesList from "./MapTiles/west/list";

function mapStateToProps(state) {
  return {

  }
}

const mapDispatchToProps = {
  loadData
}

function Container(props) {
  const { loadData } = props;

  useEffect(() => {
    loadData()
  }, [loadData])

  const renderMapTiles = () => {
    const n = [1, 2, 3, 4];
    const w = [7, 8, 13, 14, 19, 20];
    const ne = [9, 10, 15, 16, 21];
    const e = [11, 17, 23, 29];
    const s = [22, 25, 26, 27, 28];

    return [...Array(36)].map((box, index) => {
      let key;
      let list;

      if (n.includes(index)) {
        key = "north";
        list = northTilesList;
      }
      else if (w.includes(index)) {
        key = "west";
        list = westTilesList;
      }
      else if (ne.includes(index)) {
        key = "northeast";
        list = northEastTilesList;
      }
      else if (e.includes(index)) {
        key = "east";
        list = eastTilesList;
      }
      else if (s.includes(index)) {
        key = "south";
        list = southTilesList;
      }
      else {
        key = "fixed";
        list = fixedTilesList;
      }
      return <TileContainer key={index} index={index} type={key} list={list} />
    })
  }

  return (
    <div className="container">
      <PortReports />
      <div className="map">
        {renderMapTiles()}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);