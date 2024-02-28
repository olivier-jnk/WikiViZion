import React from 'react'
import {RouterProvider, createBrowserRouter, Link, useHistory } from 'react-router-dom'
import Navbar from './navbar'
import trgtImg from '../../img/trgt.png';

function Header (){
    // grab le userState et faire le systeme d'inscription ou compte en fonction.
    return(

        <header className='display flex bg-black h-28 items-center w-screen justify-between'>
            <div className='display flex gap-5 p-7 items-center'>
                <img src={trgtImg} className='max-w-10'/>

                <Navbar/>
            </div>
            <div className='text-white mr-10'>Inscription</div>
        </header>
    )
}

export default Header