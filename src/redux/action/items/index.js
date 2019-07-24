
import {database} from '../../../firebase'

export const FetchItems = () => {
    return (dispatch) => {
        dispatch(fetch_items_start())
        database.collection("tanks")
            .get()
            .then((querySnapshot)=> {
                querySnapshot.forEach((doc) => {
                    dispatch(fetch_items_success(doc.data()))
                    })
                })
            .then(()=> {
                dispatch(fetch_items_end())
            })

            .catch((error) => {
                console.log("Error getting document:", error);
            });
    };
};

const fetch_items_start = () => ({
    type: 'FETCH_ITEM_START'
});

const fetch_items_end = () => ({
    type: 'FETCH_ITEM_END'
});
const fetch_items_success = (payload) => ({
    type: 'FETCH_ITEM_SUCCESS',
    payload,
});