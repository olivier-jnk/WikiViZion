import React from "react";
import { useNavigate } from 'react-router-dom';

function MyArticle ({content, index, passIdToApp, typeEdit}){
    const navigate = useNavigate();

    function redirection (redirId, type){
        // pour visualisation
        if(type === "visualisation"){
            console.log(redirId + "redirId du post cliqué.")
            passIdToApp(redirId)
            navigate('/new-article1/:'+redirId);
        }
        else if(type === "modification"){
            passIdToApp(redirId);
            navigate('/new-article/:' + redirId);
        }else{
            console.log("erreur de redirection")
        }   
    }
    
    return(
        <li key={index} className="topContent max-w-40 overflow-hidden rounded-lg bg-[#E6A160] flex p-5 flex-row min-w-full justify-between">
            <img src={content.miniature} alt={content.title} />
            <div className="txt items-center justify-center flex gap-5 flex-col justify-start items-center">
                <p>{content.title}</p>
                <p>Ecrit par: {content.author}</p>
                <p>Status: {content.type}</p>
            </div>   
            <div className="redir flex flex-col gap-5">
                <button className="rounded-lg bg-orange-100 p-1" onClick={() => redirection(content.id, "visualisation")}>Voir</button>
                <button  className="rounded-lg bg-orange-200 p-1" onClick={() => redirection(content.id, "modification")}>Modifier</button>
                <p onClick={() => typeEdit(content.type, content.id)}>{content.type}</p>
            </div>

        </li>    
    )
}

export default MyArticle;

