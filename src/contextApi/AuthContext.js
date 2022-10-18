import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile,onAuthStateChanged,signOut} from "firebase/auth";
import app from '../firebase.config';

const UserDataContext=createContext({});
const auth=getAuth(app);

const AuthContext = ({children}) => {
    const [user,setUser]=useState({});

    const register=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    };

    const setName=(name)=>{
        return updateProfile(auth.currentUser, {
            displayName: name
          });
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        onAuthStateChanged(auth,userInfo=>{
            // const users=userInfo.user||{};
            setUser(userInfo);
        })
    },[])

    console.log(user);

    const data={user,setUser,register,login,setName,logOut};

    return (
        <UserDataContext.Provider value={data}>
            {children}
        </UserDataContext.Provider>
    );
};

export  {AuthContext,UserDataContext};