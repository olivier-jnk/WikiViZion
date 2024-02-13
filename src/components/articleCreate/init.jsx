import React from "react"
import { Link } from "react-router-dom"

function InitArticle (){

    function submitInit({onAddArticle}){

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        console.log('Title:', title);
        console.log('Description:', description);

        const newArticle = { title: title, description: description };
        onAddArticle(newArticle);
        
    }

    return(


        <div>
            <header>
                
                <h1 className='font-bold justify-self-center'>Creer un nouvel Article !</h1>
                
            </header>
                
            <form className= 'bg-[#E6A160] flex p-10 flex-col rounded-lg gap-5' id="formInit">
                <label htmlFor="title">Titre de l'article:</label>
                <input type="text" id="title" name="title" placeholder='Insérez votre titre...'required></input>
                
                <label htmlFor="title">description:</label>
                <input type="text" id="description" name="description" placeholder="de quoi l'article va parler..."required></input>
                
                <button type="button" onClick={submitInit} className='bg-slate-50' >Creer un article</button>
                
            </form>
                
            

        </div>
    )

}

export default InitArticle
