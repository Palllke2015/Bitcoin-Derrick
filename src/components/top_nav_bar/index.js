import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import '../../static/assets/scss/top_nav_bar/index.scss'
import { NavLink  } from 'react-router-dom'

import { MINING } from '../../redux/action/miner/mining'

function TopNavBar(props) {
    useEffect(()=> props.MINING(2000),[]); // eslint-disable-line react-hooks/exhaustive-deps
    return(
        <ul className='navbar top-navbar'>
            <li>
                <NavLink
                    exact
                    to="/"
                    activeClassName="selected"
                >Dashboard</NavLink>
            </li>
            <li>
                <NavLink
                    exact
                    to="/market"
                    activeClassName="selected"
                >Market</NavLink>
            </li>
            <li>
                <NavLink
                    exact
                    to="/inventory"
                    activeClassName="selected"
                >Inventory</NavLink>
            </li>
            <li>
                <NavLink
                    exact
                    to="/exchange"
                    activeClassName="selected"
                >Exchange</NavLink>
            </li>

            <li>{props.userInfo.email}</li>
            <li><img src={props.userInfo.photo} alt="user"/></li>
        </ul>
    )
}

export default connect((store) => ({
    userInfo: store.userInfo.user
}), { MINING })(TopNavBar)