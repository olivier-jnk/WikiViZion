import React from "react";

function DelContentBtn ({ eKey, id, contents, setContents, deleteArticle, delUText }) {

    function delContent (){        
        console.log(eKey + 'eKey DELCONTENT')
        delUText(eKey)

        window.location.href = '/new-article/:'+id
    }

    return(
        <button onClick={() => delContent()} className="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-2 rounded-md shadow-md">
            Supprimer
        </button>
    )
}

export default DelContentBtn;