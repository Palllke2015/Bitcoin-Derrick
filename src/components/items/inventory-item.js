import React from 'react'

export default function InventoryItem({link, descr}) {
    return(
        <div className='inventory-item'>
            <img src={link} alt='item'/>
            <div>
                {
                    Object.keys(descr).map((elem) => {

                        return (
                            <p key={elem}>
                                <b>{elem}</b>
                                {`: ${descr[elem]}`}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}