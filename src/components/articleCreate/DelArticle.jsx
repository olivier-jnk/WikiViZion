import React from "react";
import { useNavigate } from "react-router-dom";

function DelArticleBtn ({ idS, contents, setContents, deleteArticle, passIdToApp  }) {

    const idPass = 0;
    const navigate = useNavigate();
    // Faire en sorte que l'id ait une valeure nulle, tant qu'aucun article est ciblé.

    function delArticle (){    
        deleteArticle(idS)
        navigate('/')
    }

    return(
        <button onClick={() => delArticle()} className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-md shadow-md">
            Supprimer l'article
        </button>
    )
}

export default DelArticleBtn;