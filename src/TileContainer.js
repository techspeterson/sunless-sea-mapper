import React, { useState } from "react";
import { connect } from "react-redux";
import Tile from "./Tile";
import { setTile } from "./store"
import "./Tile.css"

function mapStateToProps(state) {
  return {
    north: state.north,
    east: state.east,
    northeast: state.northeast,
    west: state.west,
    south: state.south,
    fixed: state.fixed
  }
}

const mapDispatchToProps = {
  setTile
}

function TileContainer(props) {
  const [localTile, setLocalTile] = useState(props.type === "fixed" ? props.list[props.index] : null)

  const setTile = (tile) => {
    props.setTile(props.type, tile.id);
    setLocalTile(props.list[tile.id]);
  }

  const isTileSet = () => {
    const unsetTiles = Object.keys(props.list).filter(tile => {
      return !props[props.type][tile]
    });

    if (localTile) {
      return <Tile tile={localTile} />
    }
    else if (unsetTiles.length === 1) {
      setTile(props.list[unsetTiles[0]])
    }
    else {
      return <ul>
        {Object.keys(props.list)
          .filter(tile => {
            return !props[props.type][tile]
          })
          .map(option => {
            const tile = props.list[option]
            return <li key={tile.name} onClick={() => setTile(tile)}>{tile.name}</li>
          })}
      </ul>;
    }
  }

  return (
    <div className={`tileContainer ${props.type}`}>
      {isTileSet()}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TileContainer);