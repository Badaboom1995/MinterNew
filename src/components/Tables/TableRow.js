import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TableRow extends React.Component {
  
  render() {
    return (
       <tr className="smart-table__row">
            {this.props.children}
        </tr>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(TableRow);
