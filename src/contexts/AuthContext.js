import React, { useContext, useState, useEffect, useRef } from "react";
import { auth, db } from "../Firebase";
import firebase from "firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const Login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const Signup = (email, password) => {
    const seq = (Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1);

    return auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        db.collection("users")
          .doc(email)
          .collection("user-data")
          .doc("user-info")
          .set({
            email: email,
            balance: 100,
            joined: firebase.firestore.FieldValue.serverTimestamp(),
          });
      });
  };

  const Logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    Login,
    Signup,
    Logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
