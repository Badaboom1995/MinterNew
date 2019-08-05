import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavigationElement from './NavigationElement';
// import Rocket from '../Icons/Rocket';

class Navigation extends React.Component {
  render() {
    return (
      <aside className={`aside-navigation card`}>
        <div className="aside-navigation__header"></div>
        <ul className="aside-navigation__list">
          <NavigationElement name="Shop settings" url="/" />
          <NavigationElement name="Table" url="/table" />
        </ul>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  general: state.general,
});

export default connect(mapStateToProps)(Navigation);
