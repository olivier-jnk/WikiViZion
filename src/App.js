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

  //Pour la creation d'article (set une id)
  function getId (idVal) {
    setAActuId(idVal);
    console.log(aActuId + 'id de l article actuel.')
  }

  // uniquement pour les top articles ?
  function getIdClick (idVal2) {
    console.log(idVal2 + "idVal2")
    console.log(redirId + "redirId")
    setRedirId(idVal2)
    console.log(redirId + 'apres setRedirID')
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
  }

  // !!!
  const editTextUniversel = (value, eKey, aKey) => {
    // utiliser le akey à la place de selectionner le dernier article.
    contents[contents.length - 1].Acontent = contents[contents.length - 1].Acontent || {};

    const updatedContents = [...contents];
    
    updatedContents[updatedContents.length - 1].Acontent[eKey] = value;

    setContents(updatedContents);
  }

  const [user, setUser] = useState({})
  // -> systeme de compte. 

  if(aActuId){
    const itemWithId = contents.find(item => item.id === parseInt(aActuId) || 0);
    console.log(itemWithId + 'itemWidth ID !!!')
  }else{
    const itemWithId = contents.find(item => item.id === 0);
  }


  const contentId = aActuId || 0;
  const selectedContent = contents[contentId];

  const contentIdR = redirId || 0;
  const selectedContentR = contents[contentIdR];
  
  

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

      <h1>{selectedContent.id}</h1>
      {/* Attention selectedContent se base sur aActuId qui correspond à l'id du dernier article créer.
      Optimal pour la premiere phase de creation, mais ne pas utiliser pour la consultation de l'article ou retouches ulterieurs. */}

      <Title textVal={selectedContent.title} editTitleVal={editTitleVal}/>

      {/* Set les element dans le selectedContent.Acontent */}
      <TextUniversel textVal={'Vous pouvez modifier ce texte à votre convenance'} edit={editTextUniversel} type={'title'} contents={contents} eKey={parseInt(contents.length)}/>
      <TextUniversel textVal={'Celui-ci également'} edit={editTextUniversel} type={'paragraphe'} contents={contents} eKey={parseInt(contents.length)}/>
      {/* -> Les deux restent liés car la clé est similaire. -> basé sur la valeur de content.lenght*/}
      {/* Gérer l'ajout et suppresion de contenu. */}

      {/* textVal={avec clé de l'article et clé de l'element pour pouvoir le modif. + donner à part la clé de l'article et de l'element} */}
      {/* + define la clé de chaque element + stocker son type... */}

      {/* Pour la géneration de l'article dans le bon ordre suivre les nombres qui seront set pour garantir le suivi de l'ordre.
      -> [0]h(type = H1, H2...)0, [1]p0, [2]image0, [3]p1  */} 
      {/* -> voir comment faire pour une modification plus complete de contenu -> bouts de texte en gras... */}

      <h1>{contents[contents.length - 1].title}</h1>
      <p>{contents[contents.length - 1].description}</p>

      {/* mettre des zones de paragraphe modifiable, des ajouts de photos, titres... */}
      {/* Une fois que la personne est satisfaite de son article, elle peut le publier,-> met l'article dans le array des articles officiels */}
      </div>
    },
    {
      path:'/new-article1/:redirId',
      element: <div className='flex justify-center flex-column gap-10'>

        {/* <ul className="topArticles flex gap-5 justify-between">
            {contents.map((content, index, link) => 
                <li key={index} onClick={() => redirection(content.id)} className="topContent max-w-40 overflow-hidden rounded-lg">
                    <img src={content.miniature} alt={content.title} />
                    <div className="txt items-center justify-center bg-white p-5">
                        <p>{content.title}</p>
                    </div>
                </li>
            )}
        </ul> */}

        <h1>{selectedContentR.title}</h1>
        <p>{selectedContentR.description}</p>
        {/* Generation des contenus dans le bon ordre et optimale */}

      </div>

      // Pas besoin de ce chemin, la redirection peut se faire Directement sur l'element d'au dessus, quoique, pas la meilleure méthode peut etre
      // pour la génération des contenus, ou alors, la faire aussi des la haut (la gen des contenus.)
      // gen des contenus:
      // 1- TitreArticle, 2- Description, (generation auto.) 3- Element1 4- Element2 ...

    }
    
  ])
  return <div>
    <RouterProvider  router={router} contents = { contents }/>
  </div>
  
}

export default App;