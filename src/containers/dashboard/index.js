import React from 'react'
import { connect } from 'react-redux'

import { CLICK } from '../../redux/action/miner/default_click'
import { BOOST } from '../../redux/action/miner/boost'

function DashBoard({count, CLICK, BOOST, boost}) {
    return (
        <div>
            <h2>Ou Yes!</h2>
            <p>Count: {count}</p>
            <p>Boost: {boost ? 'true': 'false'}  </p>
            <p>Timer : {}</p>
            <button onClick={CLICK}>Mine!</button>
            <button onClick={()=> {
                BOOST(6000, 3)
            }}>Use Boost</button>
        </div>

    )
}

export default connect((store) => ({
    count: store.miner.count,
    boost: store.miner.boost,
}), {CLICK, BOOST})(DashBoard)