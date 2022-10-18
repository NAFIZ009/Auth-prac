import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {UserDataContext} from '../../contextApi/AuthContext';


const Login = () => {
    const {login}=useContext(UserDataContext);

    const handle=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        login(email,password)
        .then(()=>{
            form.reset()
        })
        .catch((err)=>console.error(err));
    }
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>
          <form onSubmit={handle} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none mt-5 rounded-md border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="">
              <div className="text-sm flex  justify-between">
                <Link to='/' className="ml-1 font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
                <Link to='/register' className="mr-1 font-medium text-slate-400 hover:text-slate-300">
                  Sign Up With Email
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign In
              </button>
            </div>
          </form>
          <div>
            <p className='text-slate-400 divider'>Or Continue With</p>
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal flex justify-evenly">
                <button className='btn btn-outline gap-2'><FontAwesomeIcon icon={faGithub} />GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;