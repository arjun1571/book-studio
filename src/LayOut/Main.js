import React from 'react';
import { Outlet } from 'react-router-dom';
import Fotter from '../component/Fotter/Fotter';
import Header from '../component/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;