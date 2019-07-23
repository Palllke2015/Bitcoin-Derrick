const init = {
    count: 0,
    mining: false,
};


const miner = (state = init, action) => {
    switch (action.type) {
        case 'MINING_START':
            return {
                ...state,
                mining: true,
            };

        case 'MINING_SUCCESS':
            return {
                ...state,
                count: state.count + action.number
            };

        case 'MINING_END':
            return {
                ...state,
                mining: false
            };


        default:
            return state;

    }
};

export default miner;
