import React from "react";
import MyArticle from "./myArticle";

// Voir apres pour la navigation vers l'article en question. En mode visualisation ou edit.
function MyArticles ({contents, username, passIdToApp}){


    const articlesA = contents.filter(ctn => ctn.author === username) || [];
    return(

        <ul className= "flex gap-5 justify-between flex-col">
            {articlesA.map((content, index) => 
                <MyArticle content={content} index={index} username={username} passIdToApp={passIdToApp} />
            )}
        </ul>
    )
}

export default MyArticles;