import React from 'react';
import {connect} from 'react-redux';
import '../../static/assets/scss/first_page/index.scss';
import gLogo from '../../static/assets/img/first_page/google-icon.svg';
import {Auth} from '../../redux/action/auth'

class FirstPage extends React.Component {
    render() {
        return (
            <section className='first-page'>
                <h1>Welcome to bitcoin game "Bitcoin Derrick"</h1>
                <button onClick={this.props.Auth}><img src={gLogo} alt=""/>
                Sing in with Google</button>
            </section>
        )
    }
}

export default connect(null, { Auth })(FirstPage);