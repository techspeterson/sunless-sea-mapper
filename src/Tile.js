import React from "react";

function Tile(props) {
  const ports = Object.entries(props.tile.ports);

  return (
    <div>
      <ul>
        {ports.map((port, index) => {
          return <li key={index}>{port[1].name}</li>
        })}
      </ul>
    </div>
  )
}

export default Tile;