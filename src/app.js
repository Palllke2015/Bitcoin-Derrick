import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect, Link } from 'react-router-dom';
import FirstPage from './containers/first_page';
import DashBoard from './containers/dashboard';
import Market from './containers/market';
import Inventory from './containers/inventory';
import Exchange from './containers/exchange';
import TopNavBar from "./components/top_nav_bar";

import './static/assets/scss/index.scss';



function App(props) {
    const {isLogin} = props;

    if (!isLogin) {
        return(
            <Fragment>
                <Switch>
                    <Route exact path="/" component={FirstPage} />
                    <Redirect to="/" />
                </Switch>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <TopNavBar/>
            <Switch>
                <Route exact path="/" component={DashBoard} />
                <Route path="/market/:name?" component={Market} />
                <Route exact path="/inventory" component={Inventory} />
                <Route exact path="/exchange" component={Exchange} />
                <Route render={()=> (
                    <div>
                        <p>Something wrong. Look like this page does'n exist!</p>
                        <Link to="/">Go to Dashboard</Link>
                    </div>

                    )}/>
            </Switch>

        </Fragment>

    )
}

export default connect(((store) => ({
    isLogin: store.auth.isLogin
})))(App)