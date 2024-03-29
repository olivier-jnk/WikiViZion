import React from "react";
import { useNavigate } from 'react-router-dom';

// Voir apres pour la navigation vers l'article en question. En mode visualisation ou edit.
function MyArticles ({contents, username, passIdToApp}){
    
    const navigate = useNavigate();

    function redirection (redirId){
        console.log(redirId + "redirId du post cliqué.")
        // Fonctionnel, juste mal relié.
        passIdToApp(redirId)
        navigate('/new-article1/:'+redirId);
    }

    const articlesA = contents.filter(ctn => ctn.author === username) || [];
    return(

        <ul className= "flex gap-5 justify-between flex-col">
            {articlesA.map((content, index) => 
                <li key={index} onClick={() => redirection(content.id)} className="topContent max-w-40 overflow-hidden rounded-lg">
                    <img src={content.miniature} alt={content.title} />
                    <div className="txt items-center justify-center bg-white p-5">
                        <p>{content.title}</p>
                        <p>{content.author}</p>
                        <p>{content.type}</p>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default MyArticles;