import React from 'react'

export default function InventoryItem({img, imgDescription, itemLvl, descr}) {
    return(
        <div className='inventory-item'>
            <span>LVL: {itemLvl}</span>
            <img src={img} alt={imgDescription}/>
            <p>{descr}</p>
        </div>
    )
}