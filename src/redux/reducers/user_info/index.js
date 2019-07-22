const init = {
    user: {
        name: '',
        id: '',
        photo: '',
    },
    error: false,
    errorMessage: '',
    loading: false,
};

const userInfo = (state = init, action) => {
    switch (action.type) {
        case 'FETCH_USER_INFO_START':
            return {
                ...state,
                error: false,
                loading: true,
            };

        case 'FETCH_USER_INFO_SUCCESS':
            return {
                ...state,
                error: false,
                loading: false,
                user: action.payload,
            };

        case 'FETCH_USER_INFO_ERROR':
            return {
                ...state,
                error: true,
                errorMessage: action.payload,
                user: {
                    name: '',
                    id: '',
                    photo: '',
                }
            };
        default: return state;
    }
};

export default userInfo;