import React from "react";
import Tile from "./Tile";
import fixedTiles from "./MapTiles/fixed/list";

function TileContainer(props) {
  const tileType = () => {
    let value;
    switch (props.type) {
      case "f":
        value = fixedTiles[props.index];
        break;
      default:
        value = {
          name: props.index,
          locations: []
        };
    }

    return <Tile tile={value} />;
  }

  return (
    <div className="mapSegment">
      {tileType()}
    </div>
  )
}

export default TileContainer;