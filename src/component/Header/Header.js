import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl" to="/">BookStore</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/" className={({isActive})=> isActive ? "text-red-700" : "text-stone-700" }>Home</NavLink></li>
                    <li>
                    <NavLink className={({isActive})=> isActive ? "text-red-700" : "text-stone-700" } to="/books">Books</NavLink>
                    </li>
                    <li><NavLink className={({isActive})=> isActive ? "text-red-700" : "text-stone-700" } to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;