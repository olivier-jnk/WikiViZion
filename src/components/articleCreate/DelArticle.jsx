import React from "react";
import { useNavigate } from "react-router-dom";

function DelArticleBtn ({ idS, contents, setContents, deleteArticle, passIdToApp  }) {

    const idPass = 0;
    const navigate = useNavigate();
    // Faire en sorte que l'id ait une valeure nulle, tant qu'aucun article est ciblé.

    function delArticle (){    


        // window.location.href = '/'


        //-> Derangeant que la non lisibilité de id pose un probleme meme, à l'accueil...
        //-> Jouer avec les ErrorsBoundary !!!
        
        // passIdToApp(idPass)
        // Le changement ne se fait pas...
        
        //-> Toutes les directives de suppressions etaient set dans le App.js

        

        
        

        deleteArticle(idS)

        navigate('/')

        

        // Fonctionne à merveille mais lors de suppression petit message d'erreur puis redirection, mais assez dérangeant.
        //-> Peut etre régler ca avec le erreur boundary pour 'masquer' l'erreur pour l'espace d'un instant.
        //-> Si suppression de tous les articles, le site est innutilisable... régler ca aussi avec du error boundary (masquer les topContents si il y en a pas.)

        // Faire un refresh ou nav.
        
    }

    return(
        <button onClick={() => delArticle()} className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-md shadow-md">
            Supprimer l'article
        </button>
    )
}

export default DelArticleBtn;