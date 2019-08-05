import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TableCell extends React.Component {
  
  render() {
    return (
       <td className="smart-table__cell">{this.props.children}</td>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(TableCell);
