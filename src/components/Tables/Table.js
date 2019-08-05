import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Table extends React.Component {
  onInputChange = value => {
    console.log(value);
  };
  onSelectChange = value => {
    console.log(value);
  };
  render() {
    return (
      <div className="smart-table">
        {this.props.title && <div className="smart-table__title">{this.props.title}</div>}
        <table className="smart-table__table">
          <tbody>
            {this.props.children}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Table);
