import React from "react";
import { AuthContex } from "../AuthContex/AuthContex";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const AuthProvider = ({ children }) => {

    // create user

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
  const userInfo = {
    createUser,

  };

  return (
    <AuthContex value={userInfo}>
        {children}
    </AuthContex>
  );
};

export default AuthProvider;
