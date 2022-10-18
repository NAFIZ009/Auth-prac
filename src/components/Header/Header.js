import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-300">
            <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
    );
};

export default Header;