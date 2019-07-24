import {database} from '../../../firebase'

export const MARKET = () => {
    return (dispatch) => {
        dispatch(fetch_market_items_start());
        database.collection("marketItems")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    dispatch(fetch_market_items_success(doc.id, doc.data()));
                });
            })
            .then(() => dispatch(fetch_market_items_end()))
            .catch((error) => dispatch(fetch_market_items_error(error.message)))
    }
};

const fetch_market_items_start = () => ({
    type: 'FETCH_MARKET_ITEMS_START'
});

const fetch_market_items_success = (id, payload) => ({
    type: 'FETCH_MARKET_ITEMS_SUCCESS',
    id,
    payload,
});

const fetch_market_items_end = () => ({
    type: 'FETCH_MARKET_ITEMS_END'
});

const fetch_market_items_error = (errorMessage) => ({
    type: 'FETCH_MARKET_ITEMS_ERROR',
    errorMessage,
});