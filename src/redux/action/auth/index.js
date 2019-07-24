import firebase, {database} from '../../../firebase';
import {getUserInfo} from "../user_info";


export const Auth = () => {
    return (dispatch) => {
        dispatch(authUserStart());

        return (
            firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then((result) => {
                    dispatch(authUserSuccess(result.additionalUserInfo.profile));
                    dispatch(getUserInfo(result.additionalUserInfo.profile.email));
                    if (result.additionalUserInfo.isNewUser) {
                        setNewUserInDataBase(result.additionalUserInfo.profile)
                    }
                })
                .catch((error) => {
                    console.log(error);
                    dispatch(authUserError(error.message));
                })
        )
    }
};

const authUserStart = () => ({
    type: 'AUTH_START'
});

const authUserSuccess = (payload) => ({
    type: 'AUTH_SUCCESS',
    payload,
});

const authUserError = (errorMessage) => ({
    type: 'AUTH_ERROR',
    errorMessage,
});


const setNewUserInDataBase = (userInfo) => {
    database.collection("users").add({
        name: userInfo.name,
        email: userInfo.email,
        id: userInfo.id,
        photo: userInfo.picture,
    })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
};