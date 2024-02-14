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


// const articles = []
// faire en sorte de mettre le nouvel article en construction dans un autre tableau avant sa pleine complétion.

function App() {

  const [titleA, setTitleA] = useState();

  const [articlesM, setArticlesM] = useState([])
  console.log(articlesM + 'articles M')
  
  // if(articlesM){
  //   const titleA = articlesM[0].title;
  //   console.log(articlesM + "articles M")
  // }

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
         {/* remplacer par contents */}
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
      <h1>{contents[contents.length - 1].title}</h1>
      {/* balise p qui quand hover montre des delimitation avec une icone modifier, si click -> passer en text-area stylisé et permettre
      de modifier le paragraphe. */}

      {/* mettre des zones de paragraphe modifiable, des ajouts de photos, titres... */}
      {/* Une fois que la personne est satisfait de son article, elle peut le publier,-> le met dans le array des articles officiels */}
    </div>
    },
  ])
  return <div>

    <RouterProvider  router={router} contents = { contents }/>
  </div>
  
}

export default App;