import React from "react";
import { connect } from "react-redux";
import { setReportCollected, clearAllReports } from "./store";

function mapStateToProps(state) {
  return {
    ports: state.ports
  }
}

const mapDispatchToProps = {
  setReportCollected,
  clearAllReports
}

function PortReports(props) {
  const toggleReportConnected = (port) => (e) => {
    console.log(port, e.target.checked);
    props.setReportCollected(port, e.target.checked);
  }

  return (
    <div>
      <button onClick={props.clearAllReports}>Clear All</button>
      <ul>
        {
          Object.entries(props.ports)
            .filter(port => {
              return port[1].report;
            })
            .map(port => {
              return (
                <li key={port[0]}>
                  <input type="checkbox" id={port[0]} checked={port[1].collected} onChange={toggleReportConnected(port[0])} />
                  <label htmlFor={port[0]}>{port[1].name}</label>
                </li>
              )
            })
        }
      </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PortReports);