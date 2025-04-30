import React, { useEffect, useState } from "react";
import { AuthContex } from "../AuthContex/AuthContex";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);

    // create user/ registetion

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }


    // Login user

    const SignInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }


    // signOut

    const signOutUser=()=>{
        signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('inside useEffect on auth state change', currentUser);
            setUser(currentUser);
           
        })
        return () => {
            unSubscribe();
        }
    }, [])


  const userInfo = {
    createUser,
    SignInUser,
    user,
    signOutUser

  };

  return (
    <AuthContex value={userInfo}>
        {children}
    </AuthContex>
  );
};

export default AuthProvider;
