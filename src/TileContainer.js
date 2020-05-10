import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Tile from "./Tile";
import { setTile } from "./store"
import "./Tile.css"

function mapStateToProps(state) {
  return {
  }
}

const mapDispatchToProps = {
  setTile
}

function TileContainer(props) {
  const [localTile, setLocalTile] = useState()

  const { index, type, tileStatus, tileOptions } = props;

  useEffect(() => {
    if (type === "fixed") {
      setLocalTile(tileOptions[index]);
    }
    else {
      const tile = tileStatus[index];
      if (tile) {
        setLocalTile(tileOptions[tile]);
      }
      else {
        setLocalTile(null);
      }
    }
  }, [index, tileOptions, tileStatus, type])

  const setTile = (tile) => {
    props.setTile(type, tile, index);
    setLocalTile(tileOptions[tile.id]);
  }

  const isTileSet = () => {
    const unsetTiles = Object.keys(tileOptions).filter(tile => {
      return !tileStatus[tile]
    });

    if (localTile) {
      return <Tile tile={localTile} />
    }
    else if (unsetTiles.length === 1) {
      setTile(tileOptions[unsetTiles[0]])
    }
    else {
      return <ul>
        {Object.keys(tileOptions)
          .filter(tile => {
            return !tileStatus[tile]
          })
          .map(option => {
            const tile = tileOptions[option]
            return <li key={tile.name} onClick={() => setTile(tile)}>{tile.name}</li>
          })}
      </ul>;
    }
  }

  return (
    <div className={`tileContainer ${type}`}>
      {isTileSet()}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TileContainer);