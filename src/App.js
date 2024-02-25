import React, { useState } from 'react'
import {RouterProvider, createBrowserRouter, Link} from 'react-router-dom'
import Header from './components/header';
// import './App.css';
import Navbar from './components/navbar';
import Fcontent from './components/fcontent';
import InitArticle from './components/articleCreate/init';

import panda from '../src/img/red-panda.jpg'
import mandarinDucks from '../src/img/mandarin-ducks.jpg'
import bun from '../src/img/bun.jpg'
import Title from './components/articleCreate/title';

import TextUniversel from './components/articleCreate/TextUniversel';


// const articles = [] 
// mettre les articles en construction dans un tableau annexe, avant de les push dans le officiel.

function App() {

  const [titleA, setTitleA] = useState();
  const [aActuId, setAActuId] = useState();
  const [redirId, setRedirId] = useState();

  const [articlesM, setArticlesM] = useState([])
  console.log(articlesM + 'articles M')

  function getId (idVal) {
    setAActuId(idVal);
    console.log(aActuId + 'id de l article actuel.')
  }

  function getIdClick (idVal2) {
    setRedirId(idVal2)
  }

  function getTitle (titleValue) {
    setTitleA(titleValue);
    console.log(titleA + 'titleA')
  }

  

  const articleModified = (newArticle)=> {
    setArticlesM([...articlesM, newArticle]);
  }

  const [contents, setContents] = useState([
    { id: 0, miniature: panda, title: 'red panda' },
    { id: 1, miniature: mandarinDucks, title: 'mandarin duck' },
    { id: 2, miniature: bun, title: 'bun' },
  ]);
  
  const addArticle = (newArticle) => {
    setContents([...contents, newArticle]);
  };
  
  const pushP = (txtVal,value, numero1) => { // donner l'id de l'article et la place du paragraphe.
    contents[contents.length - 1].Acontent = contents[contents.length - 1].Acontent || {};
    contents[contents.length - 1].Acontent[value + numero1] = txtVal;
    console.log(contents)
  }
  
  const editTitleVal = (newTitle) => {
    const updatedContents = [...contents];
    
    updatedContents[updatedContents.length - 1].title = newTitle;

    setContents(updatedContents);

    // contents[contents.length - 1].title = newTitle;
    // console.log(newTitle + "c'est le new title")
    // console.log(contents[contents.length - 1].title + "ou il est stocké")
  }

  // !!!
  const editTextUniversel = (value, eKey, aKey) => {
    // utiliser le akey à la place de selectionner le dernier article.
    contents[contents.length - 1].Acontent = contents[contents.length - 1].Acontent || {};

    const updatedContents = [...contents];
    
    updatedContents[updatedContents.length - 1].Acontent[eKey] = value;

    setContents(updatedContents);

    // contents[contents.length - 1].Acontent = contents[contents.length - 1].Acontent || {};
    // contents[contents.length - 1].Acontent[eKey] = value;
    // console.log(value + 'value new universel txt')
    // console.log(contents[contents.length - 1].Acontent[eKey] + "le txt universel en question;")
  }

  // moyen de racourcir ca en une fonction modification de contenu seulement. Qui recup l'id de l'element et le change dans le tableau en 
  // fonction de la nouvelle valeur.

  const [user, setUser] = useState({})
  // -> systeme de compte. 

  if(aActuId){
    const itemWithId = contents.find(item => item.id === parseInt(aActuId) || 0);
    console.log(itemWithId + 'itemWidth ID !!!')
    // = aActuId
    // fonctionne quand l'element est deja dans le tableau, sinon... fonctionne pas.
  }else{
    const itemWithId = contents.find(item => item.id === 0);
  }
  

  const router = createBrowserRouter([
    {
      
      path : '/',
      element: 
      
      <div className='flex w-screen justify-center items-start flex-col'>
         <Header/>
         <Fcontent contents={contents} passIdToApp={getIdClick}/> 
      </div>
      
    },
    {
      
      path : '/new-article',

      element:
      <div className='flex w-screen h-full justify-start items-center flex-col'>
        <Header/>
        <InitArticle addArticle={addArticle} passTitleToApp={getTitle} passIdToApp={getId} contents={contents} setContents={setContents}/>
      </div>
    },
    {
      path: '/article/:id',
      element: <div>Article
      </div>
    },
    {
      path: '/new-article/:aActuId',
      element: <div className='flex w-screen h-full justify-start items-center flex-col'>
      <Header/>

      <h1>{aActuId}</h1>
      {/* Je ne comprend pas. avec un bon chiffre d'un article existant ca fonctionne, en selectionnant le dernier article ca fonctionne, mais
      en utilisant aActuId, ca marche pas... */}


      {/* <Title textVal={contents[aActuId].title}/> */}

      <Title textVal={contents[contents.length - 1].title} editTitleVal={editTitleVal}/>
      {/* <Title textVal={contents[contents.length - 1].title} editTitleVal={editTitleVal}/> */}
      {/* itemWId.title */}
      {/* contents[itemWithId].title */}
      {/* fonctionne avc itemWithId si itemWithId est set. */}

      <TextUniversel edit={editTextUniversel} type={'title'} contents={contents} eKey={parseInt(contents.length)}/>

      {/* textVal={avec clé de l'article et clé de l'element pour pouvoir le modif. + donner à part la clé de l'article et de l'element} */}
      {/* define la clé de l'article en fonction de son nom et des chiffres derriere ou juste de chiffres aleatoirement générés.
      Se servir de la clé de l'article pour enregistrer le contenu, pour modifier des contenus dans l'article et pour y acceder avec l'url*/}
      {/* + define la clé de chaque element en fonction de son type et de son numéro. */}

      {/* Faire + tard la génération de l'article automatique + ajout des contenus modulables et de toutes sortes + acces à l'article grace à son
      url et possibilité de modifier si droits admin dessus. */}
      {/* Pour la géneration de l'article dans le bon ordre suivre les nombres qui seront set pour garantir le suivi de l'ordre.
      -> [0]h(type = H1, H2...)0, [1]p0, [2]image0, [3]p1  */} 
      {/* -> voir comment faire pour une modification plus complete de contenu -> bouts de texte en gras... */}

      <h1>{contents[contents.length - 1].title}</h1>
      <p>{contents[contents.length - 1].description}</p>

      {/* utiliser des keys pour manipuler ca correctement */}

      {/* faire apparaitre un slider avc choix du type de contenu, et générer l'element adéquat en fonction du choix.*/}

      {/* mettre des zones de paragraphe modifiable, des ajouts de photos, titres... */}
      {/* Une fois que la personne est satisfaite de son article, elle peut le publier,-> met l'article dans le array des articles officiels */}
      </div>
    },
    {
      path:'/new-article/:redirId',
      element: <div>
        Salut vous etes sur l'article
      </div>

    }
    
  ])
  return <div>
    <RouterProvider  router={router} contents = { contents }/>
  </div>
  
}

export default App;