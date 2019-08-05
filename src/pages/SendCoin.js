import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextInput from 'components/Forms/TextInput';
import Select from 'components/Forms/Select';
import Button from 'components/Forms/Button';

class SendCoin extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card__header">
          <h2 className="title title--big">Отправка монет</h2>
          <p className="text">
            Отправляйте монеты кому пожелаете — друзьям, семье, бизнес-партнерам.
          </p>
        </div>
        <div className="card__body">
          <TextInput placeholder="Количество" onChange={this.onInputChange} />
          <TextInput placeholder="Сообщение" onChange={this.onInputChange} />
          <TextInput placeholder="Сообщение" onChange={this.onInputChange} />
          <TextInput placeholder="Сообщение" onChange={this.onInputChange} />
          <TextInput placeholder="Сообщение" onChange={this.onInputChange} />
          <TextInput placeholder="Сообщение" onChange={this.onInputChange} />
          <TextInput placeholder="Сообщение" onChange={this.onInputChange} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(SendCoin);
