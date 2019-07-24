import React from 'react'
import InventoryItem from '../../components/items/inventory-item'

function Inventory() {
    return (
        <div>
            <h2>Welcome to the Inventory. What do you want to Inventory?</h2>
            <InventoryItem
                itemLvl={1}
                descr={"It's very interesting thing."}
            />
        </div>
    )
}

export default Inventory;