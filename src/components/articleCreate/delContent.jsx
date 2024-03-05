import React from "react";
import { useNavigate } from 'react-router-dom';

function DelContentBtn ({ eKey, id, contents, setContents, deleteArticle, delUText, passIdToApp }) {

    // const navigate = useNavigate();

    function delContent (){        
        console.log(eKey + 'eKey DELCONTENT')
        
        
        
        delUText(eKey)

        passIdToApp(id);

        window.location.href = '/new-article/:'+id
        

        

        // navigate('/new-article/:' + id);
        
        
        console.log(id + 'id de redirection apres suppression.')
    }

    return(
        <button onClick={() => delContent()} className="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-2 rounded-md shadow-md">
            Supprimer
        </button>
    )
}

export default DelContentBtn;