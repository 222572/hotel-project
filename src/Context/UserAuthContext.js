import { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth, db } from "../config/firebase-config";

import { child, get, ref, set } from "firebase/database";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    get(child(ref(db), "/users")).then((data) => {
      const userAuth = Object.values(data.val()).filter(
        (item) => item.email === email && item.isAdmin === false
      );
      if (userAuth[0]) {
        return signInWithEmailAndPassword(auth, email, password);
      }
      alert("Please Sign in with User Account.");
    });
  }

  function signUp(email, password, fullname, username) {
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      set(ref(db, `users/${username}`), {
        email,
        fullname,
        username,
        password,
        isAdmin: false,
      });
    });
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider)
      .then((res) => {
        return res;
      })

      .catch((er) => {
        return er;
      });
  }

  function facebookSignIn() {
    const facebookAuthProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookAuthProvider)
      .then((res) => {
        return res;
      })

      .catch((er) => {
        return er;
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user,
    setUser,
    logIn,
    signUp,
    logOut,
    googleSignIn,
    facebookSignIn,
  };
  return (
    <userAuthContext.Provider value={value}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
