import React from "react";

function Tile(props) {
  return (
    <div>
      <ul>
        {props.tile.ports.map((port, index) => {
          return <li key={index}>{port.name}</li>
        })}
      </ul>
    </div>
  )
}

export default Tile;