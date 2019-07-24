const init = {
    items: [],
    isLoading: true,
    error: false,
    errorMessage: '',
};

const market = (state = init, action) => {
    switch (action.type) {
        case 'FETCH_MARKET_ITEMS_START':
            return {
                ...state,
                isLoading: true,
                items: [],
                error: false,
                errorMessage: '',
            };

        case 'FETCH_MARKET_ITEMS_END':
            return {
                ...state,
                isLoading: false,
            };

        case 'FETCH_MARKET_ITEMS_SUCCESS':
            return {
                ...state,
                isLoading: true,
                error: false,
                items: [...state.items, [action.id, action.payload]],
                errorMessage: '',
            };

        case 'FETCH_MARKET_ITEMS_ERROR':
            return {
                ...state,
                items: [],
                error: true,
                errorMessage: action.errorMessage,
                isLoading: false,
            };

        default: return state;
    }
};

export default market;