import React from 'react'
import {RouterProvider, createBrowserRouter, Link, useHistory } from 'react-router-dom'
import Navbar from './navbar'
import trgtImg from '../../img/trgt.png';
import { useNavigate } from 'react-router-dom';

function Header (){
    // grab le userState et faire le systeme d'inscription ou compte en fonction.
    const navigate = useNavigate();
    function clearLocalStorage () {
        localStorage.clear()
        // fonctionne plus comme ca, je ne sais pq...
        alert("refresh pour voir les changements")
    }

    return(

        <header className='display flex bg-black h-28 items-center w-screen justify-between'>
            <div className='display flex gap-5 p-7 items-center'>
                <img src={trgtImg} className='max-w-10'/>

                <Navbar/>
            </div>
            <button onClick={() => { localStorage.clear(); window.location.href = '/';}} className='text-white'>Clear Local Storage !</button>
            <div className='text-white mr-10'>Inscription</div>
        </header>
    )
}

export default Header