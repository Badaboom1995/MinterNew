import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NavigationElement extends React.Component {
  state = {
    opened: false,
    active: false,
  };
  toggleTab = () => {
    this.setState(state => ({
      opened: state.opened ? false : true,
    }));
  };
  activateTab = () => {
    this.setState(() => ({
      active: true,
    }));
  };
  render() {
    return (
      <li
        className={`aside-navigation__item ${this.state.active &&
          'aside-navigation__item--active'}`}
        onClick={this.activateTab}
      >
        {this.props.children ? (
          <div
            onClick={this.toggleTab}
            className={`aside-navigation__item-title aside-navigation__item-title--container ${this
              .state.opened && 'aside-navigation__item-title--opened'} ${!this.props.general
              .asideMenuOpened && 'aside-navigation__item-title--disabled'}`}
          >
            {this.props.icon && (
              <div className="aside-navigation__icon">
                <img src={this.props.icon} alt="" />
              </div>
            )}
            <button className="aside-navigation__link">{this.props.name}</button>
          </div>
        ) : (
          <Link to={this.props.url} className="aside-navigation__item-title">
            {this.props.icon && (
              <div className="aside-navigation__icon">
                <img src={this.props.icon} alt="" />
              </div>
            )}
            <button className="aside-navigation__link">{this.props.name}</button>
          </Link>
        )}

        {this.props.children && this.state.opened && this.props.general.asideMenuOpened && (
          <ul className="aside-navigation__sublist">{this.props.children}</ul>
        )}
      </li>
    );
  }
}

const mapStateToProps = state => ({
  general: state.general,
});

export default connect(mapStateToProps)(NavigationElement);
