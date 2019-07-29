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
        items:[{
            descr: {
                description: 'you can pump your bitcoin',
                lvl: 1,
                name: 'pump',
                power: 1,
            },
            link: 'https://firebasestorage.googleapis.com/v0/b/bitcoin-derrick.appspot.com/o/pump-1.jpeg?alt=media&token=a2667b6a-91b7-437f-8ff7-c020bff38c55'
        },
            {
                descr: {
                    description: 'it\'s to collect your bitcoin',
                    lvl: 1,
                    name: 'tank',
                    value: 80
                },
                link: 'https://firebasestorage.googleapis.com/v0/b/bitcoin-derrick.appspot.com/o/tank-lvl1.jpg?alt=media&token=02ca8e8b-76ce-4528-b466-eb7be3d4dd23'
            }]
    })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
};