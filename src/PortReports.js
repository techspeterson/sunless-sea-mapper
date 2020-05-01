import React from "react";
import { connect } from "react-redux";
import { setReportCollected, toggleHideCollected, clearAllReports } from "./store";
import "./PortReports.css";

function mapStateToProps(state) {
  return {
    ports: state.ports,
    hideCollected: state.hideCollected
  }
}

const mapDispatchToProps = {
  setReportCollected,
  toggleHideCollected,
  clearAllReports
}

function PortReports(props) {
  const toggleReportConnected = (port) => (e) => {
    props.setReportCollected(port, e.target.checked);
  }

  const clearCollected = (e) => {
    props.toggleHideCollected(e.target.checked)
  }

  let ports = Object.entries(props.ports)
    .filter(port => {
      return port[1].report;
    })

  if (props.hideCollected) {
    ports = ports.filter(port => {
      return !port[1].collected;
    })
  }

  return (
    <div className="port-report-container">
      <button onClick={props.clearAllReports}>Clear All</button>
      <label htmlFor="hide-collected">
        <input type="checkbox" id="hide-collected" className="port-report-checkbox" checked={props.hideCollected} onChange={clearCollected} />
        Hide Collected
      </label>
      <ul className="port-report-list">
        {
          ports.map(port => {
            return (
              <li key={port[0]} className={port[1].collected ? "collected" : ""}>
                <label htmlFor={port[0]}>
                  <input type="checkbox" className="port-report-checkbox" id={port[0]} checked={port[1].collected} onChange={toggleReportConnected(port[0])} />
                  {port[1].name}
                </label>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PortReports);