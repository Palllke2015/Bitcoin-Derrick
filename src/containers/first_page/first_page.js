import React from 'react';
import firebase from '../../firebase';
import "firebase/auth";

import '../../static/assets/scss/first_page/index.scss'
import glogo from '../../static/assets/img/first_page/google-icon.svg'

export default class FirstPage extends React.Component {

    authWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => console.log(result))
            .catch((error) => console.log(error))
    };

    render() {
        return (
            <section className='first-page'>
                <h1>Welcome to bitcoin game "Bitcoin Derrick"</h1>
                <button onClick={this.authWithGoogle}><img src={glogo} alt=""/>
                Sing in with Google</button>
            </section>
        )
    }


}