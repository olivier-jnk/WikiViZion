import React from 'react'
import mainImg from '../img/Background.svg';
import logo from '../img/trgt.png';
import TopArticles from './topArticles';

const images = {
    [0]:{image: 1, src: '../img/fog-85.jpg'},
    [1]:{image: 1, src: '../img/fog-85.jpg'},
    [2]:{image: 1, src: '../img/fog-85.jpg'},
}
// faire une fonction choix de l'image au hasard ou en fonction de circonstances (date ou préférences utilisateur...)

function Fcontent ({contents}){
    console.log(images[0].src)
    return(
        <div className='firstContent flex flex-col'>
            <div className="content absolute">
                <img src={mainImg} alt="" className='relative w-full max-h-full' /> 
                {/* choisir une image au hasard en fonction des parametres. */}
                <div className='relative inset-x-1/2 inset-y-1/2 flex flex-col w-3/6 justify-center items-center gap-5'>
                    <img src={logo} className='max-w-20 flex justify-self-center'/>
                    {/* bare de recherche */}
                    <TopArticles contents={contents}/>
                </div>

            </div>
            
            
        </div>
    )
}

export default Fcontent