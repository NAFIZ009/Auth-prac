import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import {UserDataContext} from '../src/contextApi/AuthContext';

const PrivetRouter =({children}) => {
    console.log(children);
    const {user,loading}= useContext(UserDataContext);
    console.log(user);
    if(loading){
        return <div>loDING....</div>;
    }
     if (user&&user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRouter;