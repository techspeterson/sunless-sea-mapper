import React from "react";

function Tile(props) {
  return (
    <div>
      {props.tile.locations.map(location => {
        return location.name
      })}
    </div>
  )
}

export default Tile;