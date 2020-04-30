import React, { useState } from "react";
import { connect } from "react-redux";
import Tile from "./Tile";
import fixedTilesList from "./MapTiles/fixed/list";
import northTilesList from "./MapTiles/north/list";
import { setTile } from "./store"

function mapStateToProps(state) {
  return {
    northTiles: state.northTiles
  }
}

const mapDispatchToProps = {
  setTile
}

const selectableTiles = {
  northTiles: ["palmerston", "frostfound", "void", "stormbones"]
}

const selectableTilesFull = {
  northTiles: northTilesList
}

function TileContainer(props) {
  const [localTile, setLocalTile] = useState(props.type === "f" ? fixedTilesList[props.index] : null)

  const setTile = (category, tile) => {
    props.setTile(category, tile.id);
    console.log(tile)
    setLocalTile(selectableTilesFull[category][tile.id]);
  }

  const tileOptions = (category) => {
    return <ul>
      {selectableTiles[category]
        .filter(tile => {
          return !props[category][tile]
        })
        .map(option => {
          const tile = selectableTilesFull[category][option]
          return <li key={tile.name} onClick={() => setTile(category, tile)}>{tile.name}</li>
        })}
    </ul>
  }

  const isTileSet = (category) => {
    if (localTile) {
      return <Tile tile={localTile} />
    }
    else {
      return tileOptions(category);
    }
  }

  const tileType = () => {
    let value;
    switch (props.type) {
      case "f":
        value = <Tile tile={localTile} />;
        break;
      case "n":
        value = isTileSet("northTiles");
        break;
      default:
        value = props.index;
    }

    return value;
  }

  return (
    <div className="mapSegment">
      {tileType()}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TileContainer);