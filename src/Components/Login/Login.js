import React from 'react';
import { useState } from 'react';
import firebaseConfig from './firebase';
import firebase from "firebase/app";

import "firebase/auth";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

function Login() {
  const [newLogin, setNewLogin] = useState(false);
  const [login, setLogin] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    error: '',
    succses: ''
  })
  const hendelChange = (event) => {
    // console.log(event.target.value, event.target.name);
    let formValed = true;
    if (event.target.name === "email") {
      formValed = /\S+@\S+\.\S+/.test(event.target.value);
      // console.log(isEmailValed);
    }
    if (event.target.name === "password") {
      const isPasswordValed = event.target.value.length > 6;
      const passwordValedNumber = /\d{1}/.test(event.target.value);
      formValed = isPasswordValed && passwordValedNumber;
    }
    if (formValed) {
      const newLogin = { ...login };
      newLogin[event.target.name] = event.target.value;
      setLogin(newLogin);

    }
  }

  const hendelSubmit = (e) => {
    if (newLogin && login.email && login.password) {
      firebase.auth().createUserWithEmailAndPassword(login.email, login.password)
        // .then((userCredential) => {
        //   // Signed in 
        //   var user = userCredential.user;
        //   // ...
        // })
        .then((res) => {
          const newLogin = { ...login };
          newLogin.succses = true;
          newLogin.error = '';
          setLogin(newLogin);
          updateLogin(login.name);
        })
        .catch((error) => {
          const newLogin = { ...login };
          newLogin.succses = false;
          newLogin.error = error.message;
          setLogin(newLogin);
        });
    }
    e.preventDefault();
    if (!newLogin && login.email && login.password) {
      firebase.auth().signInWithEmailAndPassword(login.email, login.password)
        .then((res) => {
          const newLogin = { ...login };
          newLogin.succses = true;
          newLogin.error = '';
          setLogin(newLogin);
          // console.log("succes updet");
        })
        .catch((error) => {
          const newLogin = { ...login };
          newLogin.succses = false;
          newLogin.error = error.message;
          setLogin(newLogin);
        });
    }
  }
  const updateLogin = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      
    }).then(function () {
      // Update successful.
    }).catch(function (error) {
      // An error happened.
    });

  }


    return (
        <div >
        <h1>Ouer Athontection</h1>
        <input type="checkbox" onChange={() => setNewLogin(!newLogin)} name="newAcoount" id="" />
        <label htmlFor="newAcoount">creat a new Acount</label>
        <br />
        <br />
        <form onSubmit={hendelSubmit}>
          {newLogin && <input onBlur={hendelChange} type="text" name="name" placeholder="Your Name" />}
          <br />
          <br />
          <input onBlur={hendelChange} name="email" type="text" placeholder="your Email" required />
          <br />
          <br />
          <input onBlur={hendelChange} type="password" name="password" placeholder="Your password" required />
          <br />
          <br />
  
          {
            newLogin ? <input type="submit" value="sin up" /> : <input type="submit" value="Login" />
          }
        </form>
  
        {
          login.succses ? <p>  {newLogin ? "create" : "sucsse"} your account</p> : <p style={{ color: 'red' }}>  {login.error}</p>
        }
      </div>
    );
};

export default Login;