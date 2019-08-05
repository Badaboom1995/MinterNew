import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextInput from 'components/Forms/TextInput';
import Select from 'components/Forms/Select';
import Button from 'components/Forms/Button';
import TextInputWithDefaults from 'components/Forms/TextInputWithDefaults';

class Home extends React.Component {
  onInputChange = value => {
    console.log(value);
  };
  onSelectChange = value => {
    console.log(value);
  };
  render() {
    return (
      <div>
        <p>Home</p>
        <Link to="./base">Base track</Link>
        <div className="form">
          <Button />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Home);
