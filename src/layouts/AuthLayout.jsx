import React from 'react';
import Logo from '../Components/Logo/Logo';
import authImage from '../assets/authImage.png';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Logo></Logo>
            <div className='flex '>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;