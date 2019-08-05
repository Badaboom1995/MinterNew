import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TableEmpty extends React.Component {
  
  render() {
    return (
        <tr className="smart-table__header">
            <td className='smart-table__cell' colSpan={this.props.colSpan} align='center'>No data availible in table</td>
        </tr>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(TableEmpty);
