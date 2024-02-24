import React from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function InitArticle ({ addArticle, passTitleToApp, contents, passIdToApp }){ 
    const navigate = useNavigate()
        

    function submitInit () {
        
        console.log(addArticle)
        
        const titleV = document.getElementById('title')
        const desV = document.getElementById('description')
        const idV = contents.length;
        console.log(idV + "ceci est l'id")


        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        const titleS = title;
        const idS = idV;
        console.log(titleS + 'titleS')

        const newArticle = { id: idS, title: title, description: description};
        passTitleToApp(titleS);  // envoi de la valeur du titre au parent.
        passIdToApp(idS);
    
        titleV.value = "";
        desV.value = "";
        addArticle(newArticle);
        console.log('article added')

        
        
        navigate('/new-article/:'+titleS);
        
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
                {/* submitInit normalement dans onClick */}
            </form>
            
        </div>
    )

}

export default InitArticle
