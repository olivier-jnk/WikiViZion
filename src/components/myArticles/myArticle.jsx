import React from "react";
import { useNavigate } from 'react-router-dom';

function MyArticle ({content, index, passIdToApp}){
    const navigate = useNavigate();

    function redirection (redirId){
        console.log(redirId + "redirId du post cliqué.")
        // Fonctionnel, juste mal relié.
        passIdToApp(redirId)
        navigate('/new-article1/:'+redirId);
    }
    
    return(
        <li key={index} onClick={() => redirection(content.id)} className="topContent max-w-40 overflow-hidden rounded-lg bg-red-900 flex p-5">
            <img src={content.miniature} alt={content.title} />
            <div className="txt items-center justify-center p-5 flex">
                <p>{content.title}</p>
                <p>{content.author}</p>
                <p>{content.type}</p>
            </div>   
        </li>    
    )
}

export default MyArticle;

