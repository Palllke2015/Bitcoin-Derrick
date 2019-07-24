import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {MARKET}  from '../../redux/action/market'
import MarketItem from '../../components/items/market-item'
import { withRouter, NavLink } from 'react-router-dom'

import '../../static/assets/scss/market/index.scss'

function Market({MARKET, isLoading, match, items}) {
    useEffect(()=> {
        MARKET()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (isLoading) {
        return <h4>Loading...</h4>
    }
    const itemsName = items.map((elem) => <NavLink
        to={`/market/${elem[0]}`}
        key={`market-menu-elem-${elem[0]}`}
        activeClassName='selected'
    >{elem[0]}</NavLink>);

    const filtered = items.filter((elem) => elem[0] === match.params.name);
    const resultFiltered = filtered.map((elem) => {
        return elem[1]
    });
    return (
        <section className='market'>
            <h2>Welcome to the Market. What do you want to buy?</h2>

            <nav className='market-nav'>
                {itemsName}
            </nav>
            <div className='market-wrapper'>
               <MarketItem
                   name={match.params.name}
                   resultFiltered={resultFiltered[0]}
               />
            </div>
        </section>

    )
}

export default connect((store) => ({
    items: store.market.items,
    isLoading: store.market.isLoading
}), {MARKET})(withRouter(Market));