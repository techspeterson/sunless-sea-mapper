import React from "react";
import { connect } from "react-redux";
import { loadData, resetData } from "./store";

function mapStateToProps(state) {
  return {

  }
}

const mapDispatchToProps = {
  loadData, resetData
}

function Options(props) {
  const resetMap = () => {
    const confirm = window.confirm("Are you sure you want to reset the map?")
    if (confirm) {
      props.resetData();
    }
  }

  // const loadMap = () => {
  //   try {
  //     props.loadData();
  //   }
  //   catch {
  //     console.log("error loading data");
  //     props.resetData();
  //   }
  // }

  return (
    <div>
      {/* <button onClick={loadMap}>Load Map</button> */}
      <button onClick={resetMap}>Reset Map</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);