import React from "react";

import panda from '../img/red-panda.jpg'
import mandarinDucks from '../img/mandarin-ducks.jpg'
import bun from '../img/bun.jpg'
import Fcontent from "./fcontent";
import { useNavigate } from 'react-router-dom';


function TopArticles ({contents}){
    const navigate = useNavigate();

    function redirection (title){
        navigate('/'+title)
    }

    const articlesA = contents || [];
    return(

        <ul className="topArticles flex gap-5 ">
            {articlesA.map((content, index) => (
                <li key={index}  className="topContent relative max-w-40 overflow-hidden rounded-lg">
                    {/* à mettre dans li: onClick={redirection(content.title)} */}
                    {/* onClick redirection vers link, en fonction du link indiqué dans l'objet */}
                    <img src={content.miniature} alt={content.title} />
                    <div className="txt items-center justify-center bg-white p-5">
                        <p>{content.title}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
    
}

export default TopArticles;