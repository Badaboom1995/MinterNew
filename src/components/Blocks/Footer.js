import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Github from '../Icons/Github'
import Telegram from '../Icons/Telegram'

class Header extends React.Component { 
    onInputChange = (value) => {
        console.log(value)
    }
    onSelectChange = (value) => {
        console.log(value)
    }
    render(){
        return(
           <footer className="main-footer card"> 
              <span className="main-footer__copy">Copyright © Validator.Center (2018-2019)</span>
              <div className="main-footer__links">
                  <a href="" className="main-footer__links-item"><Github/></a>
                  <a href="" className="main-footer__links-item"><Telegram/></a>
              </div>
           </footer>
        )
    }
}


const mapStateToProps = state => ({
   
});

export default connect(mapStateToProps)(Header);
