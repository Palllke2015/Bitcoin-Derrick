const initStore = {
    isLogin: false,
    userInfo: {},
    loading: false,
    error: false,
    errorMessage: '',
};

const auth = (state = initStore, action) => {
    switch (action.type) {
        case 'AUTH_START':
            return {
                ...state,
                loading: true,
                error: false,
            };
        case 'AUTH_SUCCESS':
            return {
                ...state,
                loading: false,
                isLogin: true,
                error: false,
                userInfo: action.payload
            };
        case 'AUTH_ERROR':
            return {
                ...state,
                loading: false,
                isLogin: false,
                error: true,
                errorMessage: action.errorMessage
            };

        default:
            return state;
    }
};

export default auth;