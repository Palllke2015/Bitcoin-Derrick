import {database} from '../../../firebase';


export const getUserInfo = (email) => {
    return (dispatch) => {
        dispatch(getUserInfoStart());
        database.collection("users").where('email', '==', email)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    dispatch(getUserInfoSuccess(doc.data()))
                });
            })
            .catch((error) => console.log(error))


    }
};

const getUserInfoStart = () => ({
        type: 'FETCH_USER_INFO_START',
    })
;

const getUserInfoSuccess = (payload) => ({
    type: 'FETCH_USER_INFO_SUCCESS',
    payload,
});