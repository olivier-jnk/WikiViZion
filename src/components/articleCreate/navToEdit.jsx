import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NavToEdit ({ contents, id, passIdToApp, username }) {
    const navigate = useNavigate();

    function redirection(id) {
        passIdToApp(id);
        navigate('/new-article/:' + id);
    }

    const content = contents.find(content => content.id === id)
    // Si le contenu possède a comme author le bon username, alors laisser edit, sinon ne pas afficher le boutton.
    // Attention la page de modification d'article est disponible à tous par l'url. meme si pas de boutton, il reste accessible, il n y a juste pas le chemin.
    if(content.author === username){
        return (
            <button onClick={() => redirection(id)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md">
                Modifier
            </button>
        );
    } else{
        
    }
    
}

export default NavToEdit;