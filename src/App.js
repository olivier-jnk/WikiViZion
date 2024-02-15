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
import TextModify from './components/pModulable';
import Title from './components/articleCreate/title';


// const articles = [] 
// mettre les articles en construction dans un tableau annexe, avant de les push dans le officiel.

function App() {

  const [titleA, setTitleA] = useState();

  const [articlesM, setArticlesM] = useState([])
  console.log(articlesM + 'articles M')

  function getTitle (titleValue) {
    setTitleA(titleValue);
    console.log(titleA + 'titleA')
  }
  

  const articleModified = (newArticle)=> {
    setArticlesM([...articlesM, newArticle]);
  }

  const [contents, setContents] = useState([
    { miniature: panda, title: 'red panda' },
    { miniature: mandarinDucks, title: 'mandarin duck' },
    { miniature: bun, title: 'bun' },
  ]);
  
  const addArticle = (newArticle) => {
    setContents([...contents, newArticle]);
  };
  
  const pushP = (txtVal,value, numero1) => { // donner l'id de l'article et la place du paragraphe.
    contents[contents.length - 1].Acontent = contents[contents.length - 1].Acontent || {};
    contents[contents.length - 1].contenu[value + numero1] = txtVal;
    console.log(contents)
  }
  
  const editTitleVal = (newTitle) => {
    contents[contents.length - 1].title = newTitle;
  }

  const [user, setUser] = useState({})
  // -> systeme de compte. 

  const router = createBrowserRouter([
    {
      
      path : '/',
      element: 
      
      <div className='flex w-screen justify-center items-start flex-col'>
         <Header/>
         <Fcontent contents={contents}/> 
         <p className='z-10'>L'esthétique du site est immonde pour l'instant, ca arrive très vite ! je m'occupe d'abord un peu plus du react et j'améliore ca 
          significativement.
         </p>
      </div>
      
    },
    {
      
      path : '/new-article',
      
      element:
  
      <div className='flex w-screen h-full justify-start items-center flex-col'>
        <Header/>
        <InitArticle addArticle={addArticle} passTitleToApp={getTitle}/>
      </div>
    },
    {
      path: '/article/:id',
      element: <div>Article
      </div>
    },
    {
      path: '/new-article/:titleA',
      element: <div className='flex w-screen h-full justify-start items-center flex-col'>
      <Header/>
      <Title textVal={contents[contents.length - 1].title} editTitleVal={editTitleVal}/>
      <h1>{contents[contents.length - 1].title}</h1>
      <p>{contents[contents.length - 1].description}</p>
      {/* utiliser des keys pour manipuler ca correctement */}

      <button onClick={()=>editTitleVal('nouveau titre')}>titre Euggg</button>



      {/* contents[contents.length - 1].title */}
      {/* balise p qui quand hover montre des delimitation avec une icone modifier, si click -> passer en text-area stylisé et permettre
      de modifier le paragraphe. */}
      <textarea id="p1" onChange={(event) => pushP(event.target.value,"p", 1)}></textarea>
      <textarea id="p1" onChange={(event) => pushP(event.target.value,"h1", 2)}></textarea>
      <p>{contents[contents.length - 1].p1}</p>
      {/* <p onClick={AnewContent}>+</p> */}
      <TextModify/>
      {/* faire apparaitre un slider avc choix du type de contenu, et générer l'element adéquat en fonction du choix.*/}

      {/* mettre des zones de paragraphe modifiable, des ajouts de photos, titres... */}
      {/* Une fois que la personne est satisfaite de son article, elle peut le publier,-> met l'article dans le array des articles officiels */}
      </div>
    },
  ])
  return <div>

    <RouterProvider  router={router} contents = { contents }/>
  </div>
  
}

export default App;