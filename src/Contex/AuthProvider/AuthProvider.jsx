import React from "react";
import { AuthContex } from "../AuthContex/AuthContex";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const AuthProvider = ({ children }) => {

    // create user/ registetion

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }


    // Login user

    const SignInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }


  const userInfo = {
    createUser,
    SignInUser

  };

  return (
    <AuthContex value={userInfo}>
        {children}
    </AuthContex>
  );
};

export default AuthProvider;
