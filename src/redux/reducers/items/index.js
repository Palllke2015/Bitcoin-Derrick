const init = {
    tank: 1,
    tankVolume: 80,
    pump: 1,
    pumpPower: 1,
};

const items = (state = init, action) => {
    switch (action.type) {
        case 'UPDATE_TANK':
            return {
                ...state,
                tank: action.lvl,
            };

        case 'UPDATE_PUMP':
            return {
                ...state,
                pump: action.lvl,
            };

        default: return state;
    }
};

export default items;