import React from 'react'
import { Link } from 'react-router-dom'
import App from '../../App'
import Header from './header'

// Mes articles = uniquement visible plus-tard dans le cas de connexion à un compte.
function Navbar (){
    return(
        <nav className='flex gap-5 text-white'>
            <Link to='/'>Accueil</Link>
            <Link to='/new-article'>Creer un article</Link>
            <Link to='/mes-articles'>Mes articles</Link>
        </nav>
    )
}

export default Navbar