import React from "react";

import panda from '../../img/red-panda.jpg'
import mandarinDucks from '../../img/mandarin-ducks.jpg'
import bun from '../../img/bun.jpg'
import Fcontent from "./fcontent";
import { useNavigate } from 'react-router-dom';


function TopArticles ({contents, passIdToApp}){
    const navigate = useNavigate();

    function redirection (redirId){
        console.log(redirId + ' redirId dans redirection dans TOP ARTICLES')
        passIdToApp(redirId)
        console.log(redirId + 'redir ID !!!')
        navigate('/new-article1/:'+redirId);
        // bug de redirection, et pourtant quand on ignore le msg, ca fonctionne.
    }

    const articlesA = contents || [];
    return(

        <ul className="topArticles flex gap-5 justify-between">
            {articlesA.map((content, index) => 
                <li key={index} onClick={() => redirection(content.id)} className="topContent max-w-40 overflow-hidden rounded-lg">
                    <img src={content.miniature} alt={content.title} />
                    <div className="txt items-center justify-center bg-white p-5">
                        <p>{content.title}</p>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default TopArticles;