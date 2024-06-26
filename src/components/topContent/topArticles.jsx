import React from "react";

import panda from '../../img/red-panda.jpg'
import mandarinDucks from '../../img/mandarin-ducks.jpg'
import bun from '../../img/bun.jpg'
import Fcontent from "./fcontent";
import { useNavigate } from 'react-router-dom';


function TopArticles ({contents, passIdToApp}){
    const navigate = useNavigate();

    function redirection (redirId){
        passIdToApp(redirId)
        navigate('/new-article1/:'+redirId);
    }

    const articlesA = contents.filter(ctn => ctn.type !== "draft") || [];
    return(

        <ul className="topArticles flex gap-5 justify-between">
            {articlesA.map((content, index) => 
                <li key={index} onClick={() => redirection(content.id)} className="topContent max-w-40 overflow-hidden rounded-lg">
                    <img src={content.miniature} alt={content.title} />
                    <div className="txt items-center justify-center bg-white p-5">
                        <p>{content.title}</p>
                        <p>{content.author}</p>
                    </div>
                </li>
            )}
        </ul>
    )
}
// Ne pas afficher tous les elements qui possède l'état "draft"

export default TopArticles;