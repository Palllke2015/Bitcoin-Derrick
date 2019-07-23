import React from 'react'
import {connect} from 'react-redux'
import {MINING} from '../../redux/action/miner/mining'

function DashBoard({count, tank, pump, MINING, mining, tankVolume, pumpPower}) {
    return (
        <div>
            <h2>Ou Yes!</h2>
            <p>Count: {count}</p>
            <p>Lvl "Tank": {tank} <span>Max volume - {tankVolume}</span></p>
            <p>Lvl "Pump": {pump} <span>Pump power - {pumpPower}</span></p>
            <button
                onClick={MINING}
                disabled={mining}
            >Boost</button>
        </div>

    )
}

export default connect((store) => ({
    count: store.miner.count,
    mining: store.miner.mining,
    tank: store.items.tank,
    tankVolume: store.items.tankVolume,
    pump: store.items.pump,
    pumpPower: store.items.pumpPower,
}), {MINING})(DashBoard)