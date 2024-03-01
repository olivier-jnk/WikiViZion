import React from "react";

function DelArticleBtn ({ idS, contents, setContents, delArticle }) {

    function delArticle (idS, contents, setContents){
        
        console.log(contents + 'DelContents')
        console.log(contents.filter(content => content.id !== idS) +'contents.filter')

        // console.log(contents.filter(content => content.id !== idS))
        // const newContents = contents.filter(content => content.id !== idS);
        // delArticle(newContents);

        // localStorage.setItem('contents', JSON.stringify(newContents));
        // window.location.href = '/';
    }

    return(
        <button onClick={() => delArticle(idS, contents, delArticle)} className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-md shadow-md">
            Supprimer l'article
        </button>
    )
}

export default DelArticleBtn;