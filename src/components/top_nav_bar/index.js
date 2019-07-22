import React from 'react';
import {connect} from 'react-redux';
import '../../static/assets/scss/top_nav_bar/index.scss';
import { NavLink  } from 'react-router-dom'

function TopNavBar(props) {
    return(
        <ul className='navbar top-navbar'>
            <NavLink
                exact
                to="/"
                activeClassName="selected"
            >Dashboard</NavLink >
            <NavLink
                exact
                to="/market"
                activeClassName="selected"
            >Market</NavLink >
            <NavLink
                exact
                to="/inventory"
                activeClassName="selected"
            >Inventory</NavLink >
            <NavLink
                exact
                to="/exchange"
                activeClassName="selected"
            >Exchange</NavLink >
            <li>{props.userInfo.email}</li>
            <li><img src={props.userInfo.photo} alt="user"/></li>
        </ul>
    )
}

export default connect((store) => ({
    userInfo: store.userInfo.user
}))(TopNavBar)