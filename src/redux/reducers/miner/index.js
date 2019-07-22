const init = {
    count: 0,
    level: 1,
    boost: false,
    boostDuration: 0,
    boostRate: 1,
};


const miner = (state = init, action) => {
    switch (action.type) {
        case 'DEFAULT_CLICK':
            return {
                ...state,
                count: state.count + action.count,
            };

        case 'BOOST_START':
            return {
                ...state,
                boost: true,
                boostRate: action.rate
            };

        case 'BOOST_END':
            return {
                ...state,
                boost: false,
                boostRate: 1,
            };

        default:
            return state;

    }
};

export default miner;
