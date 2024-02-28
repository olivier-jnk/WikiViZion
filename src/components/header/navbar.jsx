import React from 'react'
import { Link } from 'react-router-dom'
import App from '../../App'
import Header from './header'

function Navbar (){
    return(
        <nav className='flex gap-5'>
            <Link to='/' className='text-white'>Accueil</Link>
            <Link to='/new-article' className='text-white'>Creer un article</Link>
        </nav>
    )
}

export default Navbar