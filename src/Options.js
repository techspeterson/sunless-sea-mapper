import React from "react";
import { connect } from "react-redux";
import { loadData, resetData, toggleHideUnderwater } from "./store";

function mapStateToProps(state) {
  return {
    hideUnderwater: state.hideUnderwater
  }
}

const mapDispatchToProps = {
  loadData, resetData, toggleHideUnderwater
}

function Options(props) {
  const resetMap = () => {
    const confirm = window.confirm("Are you sure you want to reset the map?")
    if (confirm) {
      props.resetData();
    }
  }

  const toggleUnderwater = (e) => {
    props.toggleHideUnderwater(e.target.checked)
  }

  return (
    <div className="optionsContainer">
      <label htmlFor="hide-underwater">
        <input type="checkbox" id="hide-underwater" className="port-report-checkbox" checked={props.hideUnderwater} onChange={toggleUnderwater} />
        Hide Underwater Ports
      </label>
      <button onClick={resetMap}>Reset Map</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);