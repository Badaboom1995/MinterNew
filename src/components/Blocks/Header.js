import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
        <span className="main-header__hide-aside">
          <span className="main-header__hide-aside-line"></span>
          <span className="main-header__hide-aside-line"></span>
          <span className="main-header__hide-aside-line"></span>
        </span>
        <nav className="main-header__menu">
          <Link className="main-header__menu-item title title--small" to="./blocks">
            Blocks
          </Link>
          <Link className="main-header__menu-item title title--small" to="./transactions">
            Transactions
          </Link>
          <Link className="main-header__menu-item title title--small" to="./nodes">
            Nodes
          </Link>
          <Link className="main-header__menu-item title title--small" to="./coins">
            Coins
          </Link>
        </nav>
        {/* <UserBlock /> */}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  general: state.general,
});

export default connect(mapStateToProps)(Header);
