import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import firebaseConfig from './firebaseConfig';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import logos from '../../../images/logos/logo.png';
import googleIcon from '../../../images/icons/google.png';
import './Login.css';



firebase.initializeApp(firebaseConfig);

const Login = () => {
    const {login, logged} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;
    const [isLogin, setIsLogin] = logged;
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogleSignIN = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            console.log(res.user);
            const signedInuser = { name: displayName, email, img: photoURL };
            setLoggedInUser(signedInuser);
            setIsLogin(true);
            setUserToken();
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(idToken => {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
        })
        .catch(function(error) {
        // Handle error
        });
    }
    return (
        <section className="container mx-auto row flex-column align-items-center py-5">
            <div className="col-md-4 mt-5">
                <div className="text-center">
                    <img style={{width: '120px', marginBottom: '3em'}} src={logos} alt=""/>
                </div>
                <div className="card py-5 text-center">
                    <h4 className="text-center mb-4">Login with</h4>
                    <button onClick={handleGoogleSignIN} className="g-signIn"><img src={googleIcon} alt=""/> Continue with Google </button>
                </div>
            </div>
        </section>
    );
};

export default Login;