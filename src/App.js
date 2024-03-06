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
  
  const initialRedir = 0;

  const [redirId, setRedirId] = useState(() => {
    const redirIdStorage = localStorage.getItem('redirId');
    return redirIdStorage ? JSON.parse(redirIdStorage) : initialRedir;
  });

  useEffect(() => {
    localStorage.setItem('redirId', JSON.stringify(redirId));
  }, [redirId]);

  const initialContents = [
    { id: 0, miniature: panda, title: 'red panda', Acontent: [
      { num: 0, value:'salut',type: 'p' }, { num: 1, value: 'salut2', type: 'p'}
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

  function RndNumber() {
    let randomNumber = '';

    for (let i = 0; i < 5; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }
  
    return randomNumber;

  }

  function getIdClick (idVal2) {
    setRedirId(idVal2)
  }

  function getTitle (titleValue) {
    setTitleA(titleValue);
  }
  
  const addArticle = (newArticle) => {
    setContents([...contents, newArticle]);
  };

  const contentIdR = redirId || 0;
  const selectedContentR = contents[contentIdR];

  const getContentById = contents.find(content => content.id == contentIdR)
  console.log(getContentById + 'GetContentByID')

  const deleteArticle = (cId) => {

    setRedirId(0)
    
    const newContents = contents.filter(item => item.id !== cId);
    setContents(newContents);
    localStorage.setItem('contents', JSON.stringify(newContents));
    
  };
  
  const editTitleVal = (newTitle) => {
    const updatedContents = [...contents];

    updatedContents.find(content => content.id == contentIdR).title = newTitle;

    setContents(updatedContents);

  }

  const editTextUniversel = (value, eKey, aKey) => {

    const updatedContents = [...contents];
    
    updatedContents.find(content => content.id == contentIdR).Acontent.find(c => c.num === eKey).value = value;

    setContents(updatedContents);
  }

  const delTextUniversel = (eKey) => {

    setContents(prevContents => {
      
      return prevContents.map(content => {
        if (content.id === contentIdR) {
          console.log(eKey + "EKEY.NUM")
          console.log(JSON.stringify(content.Acontent.filter(c => c.num == eKey)) + 'Content filter a supp.')
          return {
            ...content,
            Acontent: [...content.Acontent.filter(ctn => ctn.num != eKey)]
          };
          
        }
        console.log(JSON.stringify(content + "content juste avant le return"))
        return content;
      });
    });
  }

  const createUniverselText = (value, type, eKey, aKey) => {
    setContents(prevContents => {
      return prevContents.map(content => {
        if (content.id === contentIdR) {
          return {
            ...content,
            Acontent: [...content.Acontent, { num: RndNumber(), value: value, type: type }]
            // num ?
            // content.Acontent.length à l'origine
          };
        }
        return content;
      });
    });
  };

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
        <InitArticle addArticle={addArticle} passTitleToApp={getTitle} passIdToApp={getIdClick} contents={contents} 
        setContents={setContents} random={RndNumber}/>
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
            <Title textVal={getContentById.title} editTitleVal={editTitleVal}/>
            {/* changer le title edit aussi. */}
          </div>

          <p>{getContentById.description}</p>

          <ul className="flex gap-5 justify-between flex-col">
            {getContentById.Acontent.map((content) =>        
              <TextUniversel passIdToApp={getIdClick} idS={getContentById.id} textVal={content.value} 
              edit={editTextUniversel} type={content.type} eKey={content.num} contents={contents} delUText={delTextUniversel}/>
            )}
          </ul>

          <AddContent createUniverselText={createUniverselText}/>
          <DelArticleBtn idS={contentIdR} contents={contents} setContents={setContents} 
          deleteArticle={deleteArticle} passIdToApp={getIdClick}/>
          {/* 'etes vous surs de vouloir supprimer l'article ?' */}
          {/* button supprimer l'article (+ tard le faire dans les paramètres ou... a voir) */}

          {/* Une fois que la personne est satisfaite de son article, elle peut le publier,-> met l'article dans le array des articles officiels */}
        </div>
      </div>
    },
    {
      path:'/new-article1/:redirId',
      element: <div className='flex justify-center flex-col items-center gap-10'>
        <Header/>

        <h1>{getContentById.title || 0}</h1>
  
        <p>{getContentById.description}</p>

        {/* Apparition du texte différente en fonction de son type + aucune apparition si pas de contenu. */}
        <ul className="flex gap-5 justify-between flex-col">
          {getContentById.Acontent.map((content) =>              
            <p>{content.value}</p>
          )}
        </ul>

        <NavToEdit id={getContentById.id} passIdToApp={getIdClick}/>
        {/* Apparait uniquement si la personne à les droits sur cet article + emmene vers la page de modification. */}

      </div>
    }
  ])
  return <div>
    <RouterProvider  router={router} contents = { contents }/>
  </div>
  
}

export default App;