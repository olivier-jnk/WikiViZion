import React, { useState }  from 'react'
import mainImg from '../img/Background.svg';
import logo from '../img/trgt.png';
import TopArticles from './topArticles';
import SearchBar from './searchBar';

const images = {
    [0]:{image: 1, src: '../img/fog-85.jpg'},
    [1]:{image: 1, src: '../img/fog-85.jpg'},
    [2]:{image: 1, src: '../img/fog-85.jpg'},
}
// faire une fonction choix de l'image au hasard ou en fonction de circonstances (date ou préférences utilisateur...)

function Fcontent ({contents}){
    console.log(images[0].src)
    return(
        <div className='firstContent flex flex-col w-full h-40vh justify-center items-center' style={{ backgroundImage: `url(${mainImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
            {/* <img src={mainImg} alt="" className='relative w-full max-h-full' />  */}
            {/* choisir une image au hasard en fonction des parametres. */}
            <div className='flex flex-col w-3/6 items-center justify-center gap-5 p-10'>
                <img src={logo} className='max-w-20 flex justify-self-center'/>
                {/* barre de recherche */}
                <SearchBar/>
                <TopArticles contents={contents}/>
                <p className='z-10'>Le site est encore en construction, il est donc normal que l'esthétisme laisse à désirer et que certaines 
                fonctionnalités manquent ou ne soient pas opérationnelles.
                </p>
            </div>
        </div>
    )
}

export default Fcontent