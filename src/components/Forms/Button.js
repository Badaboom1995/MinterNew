import React from 'react';
import { connect } from 'react-redux';

class TextInput extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} className={`button ${this.props.className}`}>
        {this.props.value}
      </button>
    );
  }
}

const mapStateToProps = state => ({
  general: state.general,
});

export default connect(mapStateToProps)(TextInput);
