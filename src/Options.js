import React from "react";
import { connect } from "react-redux";
import { resetData } from "./store";

function mapStateToProps(state) {
  return {

  }
}

const mapDispatchToProps = {
  resetData
}

function Options(props) {
  const { resetData } = props;

  const resetMap = () => {
    const confirm = window.confirm("Are you sure you want to reset the map?")
    if (confirm) {
      resetData();
    }
  }

  return (
    <div>
      <button onClick={resetMap}>Reset Map</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);