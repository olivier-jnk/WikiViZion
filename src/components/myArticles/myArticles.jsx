import React from "react";
import MyArticle from "./myArticle";

// Si pas de connexion à un compte, ne pas afficher l'onglet mes articles
// Si compte mais pas d'article, afficher sur les pages mes articles un message. "Pas d'article" et éventuellement une redirection pour en 
// -> créer un.

function MyArticles ({contents, username, passIdToApp}){

    const articlesA = contents.filter(ctn => ctn.author === username) || [];
    return(
        <ul className= "flex gap-5 justify-between flex-col w-2/3">
            {articlesA.map((content, index) => 
                <MyArticle content={content} index={index} username={username} passIdToApp={passIdToApp}/>
            )}
        </ul>
    )
}

export default MyArticles;