import React from "react";

function DelArticleBtn ({ idS, contents, setContents, deleteArticle }) {

    function delArticle (){        
        deleteArticle(idS)
        // Fonctionne à merveille mais lors de suppression petit message d'erreur puis redirection, mais assez dérangeant.
        //-> Peut etre régler ca avec le erreur boundary pour 'masquer' l'erreur pour l'espace d'un instant.
        //-> Si suppression de tous les articles, le site est innutilisable... régler ca aussi avec du error boundary (masquer les topContents si il y en a pas.)
    }

    return(
        <button onClick={() => delArticle()} className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-md shadow-md">
            Supprimer l'article
        </button>
    )
}

export default DelArticleBtn;