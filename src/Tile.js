import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    allPorts: state.ports
  }
}

function Tile(props) {
  const ports = Object.entries(props.tile.ports);
  const { allPorts } = props;

  return (
    <div>
      <ul>
        {ports.map((port, index) => {
          let collected = false;
          const portObject = allPorts[port[0]];
          if (portObject) {
            collected = portObject.collected
          }

          return <li key={index} className={collected ? "collected" : ""}>{port[1].name}</li>
        })}
      </ul>
    </div>
  )
}

export default connect(mapStateToProps)(Tile);