import React from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function InitArticle ({ addArticle, passTitleToApp, contents, setContents, passIdToApp, random}){ 
    const navigate = useNavigate()

    function submitInit () {
        
        const titleV = document.getElementById('title')
        const desV = document.getElementById('description')
        const idV = random(); 
        //-> pas la bonne méthode

        // modifier contents.length

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        const titleS = title;
        const idS = idV;

        const newArticle = { id: idS, title: title, description: description, Acontent: [
            { num: 0, value:'Vous pouvez modifier ce texte comme vous le souhaitez',type: 'title' }, { num: 1, value: 'Ce texte aussi est entierement modifiable.', type: 'paragraphe'}
        ]} ;
        // init des ici un ou deux textes modulable.
        // Faire en sorte que les textes modulables soient supprimables et que l'on puisse modifier leur type (p, titre(h2, h3...))
        passTitleToApp(titleS);  // envoi de la valeur du titre au parent.
        passIdToApp(idS);
    
        titleV.value = "";
        desV.value = "";
        addArticle(newArticle); // ajouter l'article au tableau content
        console.log(newArticle + "new article Val")


        navigate('/new-article/:'+idS);
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
