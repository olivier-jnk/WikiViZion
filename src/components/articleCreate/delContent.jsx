import React from "react";

function DelContentBtn ({ eKey, contents, setContents, deleteArticle, delUText }) {

    function delContent (){        
        console.log(eKey + 'eKey DELCONTENT')
        delUText(eKey)
        // La suppression fonctionne mais casse tout le travail du map/- a voir
    }

    return(
        <button onClick={() => delContent()} className="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-2 rounded-md shadow-md">
            Supprimer
        </button>
    )
}

export default DelContentBtn;