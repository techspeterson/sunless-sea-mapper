import React from "react";

function Tile(props) {
  return (
    <div>
      <ul>
        {props.tile.locations.map((location, index) => {
          return <li key={index}>{location.name}</li>
        })}
      </ul>
    </div>
  )
}

export default Tile;