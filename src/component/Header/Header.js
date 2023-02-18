import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl" to="/">BookStore</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li>
                    <Link to="/books">Books</Link>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;