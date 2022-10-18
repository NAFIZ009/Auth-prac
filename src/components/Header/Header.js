import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserDataContext} from '../../contextApi/AuthContext';

const Header = () => {
    const {user,logOut}=useContext(UserDataContext);
    const navigate=useNavigate();
    const logIn=()=>{
        navigate('/register');
    }
    const handle=e=>{
        e.preventDefault();
        logOut()
        .then(()=>{})
        .catch(()=>{});
    }
    return (
        <div className="navbar bg-base-300 flex justify-around">
            <Link className="btn btn-ghost normal-case text-xl">RegisterUI</Link>
            {
                user&&<p><small className='mr-1'>Welcome </small>{user.displayName}</p>
            }
            {
                user?<button onClick={handle} className='btn btn-outline btn-xs'>LogOut</button>:<button onClick={logIn} className='btn btn-outline btn-xs'>LogIn</button>
            }
            <Link className='btn btn-outline' to='/orders'>orders</Link>
        </div>
    );
};

export default Header;