import React from 'react'
import InventoryItem from '../../components/items/inventory-item'
import { connect } from 'react-redux'

import '../../static/assets/scss/inventory/index.scss'

function Inventory({userInfo}) {

    const items = userInfo.map((elem) => {
        return <InventoryItem
            key={elem.descr.name}
            link={elem.link}
            descr={elem.descr}
        />
    });

    return (
        <div className='inventory'>
            <h2>Welcome to the Inventory. What do you want to Inventory?</h2>
            {items}
        </div>
    )
}

export default connect((store) => ({
    userInfo: store.userInfo.user.items,
}))(Inventory);