import React, { useState, useEffect } from 'react'
import { json, useNavigate } from 'react-router-dom';
import {RouterProvider, createBrowserRouter, Link} from 'react-router-dom'
import Header from './components/header/header';

import Navbar from './components/header/navbar';
import Fcontent from './components/topContent/fcontent';
import InitArticle from './components/articleCreate/init';

import panda from '../src/img/red-panda.jpg'
import mandarinDucks from '../src/img/mandarin-ducks.jpg'
import bun from '../src/img/bun.jpg'
import Title from './components/articleCreate/title';

import TextUniversel from './components/articleCreate/TextUniversel';
import AddContent from './components/articleCreate/addContent';
import NavToEdit from './components/articleCreate/navToEdit';
import DelArticleBtn from './components/articleCreate/DelArticle';


// const articles = [] 
// mettre les articles en construction dans un tableau annexe, avant de les push dans le officiel.

function App() {

  const [user, setUser] = useState({})
  // -> systeme de compte. 

  const [titleA, setTitleA] = useState();
  const [aActuId, setAActuId] = useState();
  const [redirId, setRedirId] = useState();

  const initialContents = [
    { id: 0, miniature: panda, title: 'red panda', Acontent: [
      { value:'salut',type: 'p' }, { value: 'salut2', type: 'p'}
    ]},
    { id: 1, miniature: mandarinDucks, title: 'mandarin duck', Acontent: [
      { value:'salut',type: 'p' }, { value: 'salut2', type: 'p'}
    ] },
    { id: 2, miniature: bun, title: 'bun', Acontent: [
      { value:'salut',type: 'p' }, { value: 'salut2', type: 'p'}
    ] },
  ];

  const [contents, setContents] = useState(() => {
    const contentsStorage = localStorage.getItem('contents');
    return contentsStorage ? JSON.parse(contentsStorage) : initialContents;
  });

  useEffect(() => {
    localStorage.setItem('contents', JSON.stringify(contents));
  }, [contents]);
  
  //Pour la creation d'article (set une id)
  function getId (idVal) {
    setAActuId(idVal);
  }

  // uniquement pour les top articles ?
  function getIdClick (idVal2) {
    setRedirId(idVal2)
  }

  function getTitle (titleValue) {
    setTitleA(titleValue);
  }
  
  const addArticle = (newArticle) => {
    setContents([...contents, newArticle]);
  };

  const delArticle = (newContents) => {
    setContents(newContents)
  }
  
  const editTitleVal = (newTitle) => {
    const updatedContents = [...contents];
    
    updatedContents[aActuId].title = newTitle;
    // updatedContents.length - 1 -> ce qui a été changé dans[]

    setContents(updatedContents);
  }

  // Dns le cas de l'initiation d'un article
  const contentId = aActuId || 0;
  const selectedContent = contents[contentId];

  // Dns le cas de la consultation d'un article
  const contentIdR = redirId || 0;
  const selectedContentR = contents[contentIdR];

  // !!!
  const editTextUniversel = (value, eKey, aKey) => {

    const updatedContents = [...contents];
    
    updatedContents[contentId].Acontent[eKey].value = value;

    setContents(updatedContents);
  }

  const createUniverselText = (value, type, eKey, aKey,) => {
    
    const newContent = { num: selectedContent.Acontent.length, value: value, type: type };

    setContents(prevContents => {
      const updatedContents = [...prevContents];
      updatedContents[contentId] = {
        ...updatedContents[contentId],
        Acontent: [...updatedContents[contentId].Acontent, newContent]
      };
      return updatedContents;
    });
  }

  if(aActuId){
    const itemWithId = contents.find(item => item.id === parseInt(aActuId) || 0);
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
      path: '/new-article/:aActuId',
      // changer 'new-article'
      element: 
      <div className='flex w-screen h-full justify-center items-center flex-col gap-10'>
        <Header/>

        <div className='flex h-full flex-col gap-10' style={{ width: '60vw' }}>
          <div className='flex gap-10'>

            <Title textVal={selectedContent.title} editTitleVal={editTitleVal}/>
            

          </div>

          <p>{selectedContent.description}</p>


          <ul className="flex gap-5 justify-between flex-col">
            {selectedContent.Acontent.map((content) =>        
              <TextUniversel sContent={selectedContent.id} textVal={content.value} edit={editTextUniversel} type={content.type} eKey={content.num} content={contents}/>
            )}
          </ul>

          <AddContent createUniverselText={createUniverselText}/>
          <DelArticleBtn id={contentId} contents={contents} setContents={setContents} delArticle={delArticle} />
          {/* 'etes vous surs ?' */}
          {/* button supprimer l'article (+ tard le faire dans les paramètres ou... a voir) */}

          {/* mettre des zones de paragraphe modifiable, des ajouts de photos, titres... */}
          {/* Une fois que la personne est satisfaite de son article, elle peut le publier,-> met l'article dans le array des articles officiels */}
        </div>
      </div>
    },
    {
      path:'/new-article1/:redirId',
      element: <div className='flex justify-center flex-col items-center gap-10'>
        <Header/>
        <h1>{selectedContentR.title}</h1>
        <p>{selectedContentR.description}</p>

        {/* Apparition du texte différente en fonction de son type + aucune apparition si pas de contenu. */}
        <ul className="flex gap-5 justify-between flex-col">
          {selectedContentR.Acontent.map((content) =>              
            <p>{content.value}</p>
          )}
        </ul>

        <NavToEdit id={selectedContentR.id} passIdToApp={getId}/>
        {/* Apparait uniquement si la personne à les droits sur cet article + emmene vers la page de modification. */}

      </div>
    }
  ])
  return <div>
    <RouterProvider  router={router} contents = { contents }/>
  </div>
  
}

export default App;