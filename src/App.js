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
      { num: 0, value:'salut',type: 'p' }, { num: 1, value: 'salut2', type: 'p'}
    ]},
    { id: 1, miniature: mandarinDucks, title: 'mandarin duck', Acontent: [
      { value:'salut',type: 'p' }, { value: 'salut2', type: 'p'}
    ] },
    { id: 2, miniature: bun, title: 'bun', Acontent: [
      { value:'salut',type: 'p' }, { value: 'salut2', type: 'p'}
    ] },
  ];
  
  function RndNumber() {
    let randomNumber = '';

    for (let i = 0; i < 5; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }
  
    return randomNumber;
  }

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
    console.log(idVal2 + 'get et setted redir id.')
  }

  function getTitle (titleValue) {
    setTitleA(titleValue);
  }
  
  const addArticle = (newArticle) => {
    setContents([...contents, newArticle]);
  };

  const deleteArticle = (cId) => {
    window.location.href = '/';
    const newContents = contents.filter(item => item.id !== cId);
    setContents(newContents);
    localStorage.setItem('contents', JSON.stringify(newContents));
    
  };
  
  const editTitleVal = (newTitle) => {
    const updatedContents = [...contents];
    
    updatedContents[aActuId].title = newTitle;
    // updatedContents.length - 1 -> ce qui a été changé dans[]

    setContents(updatedContents);
  }

  // Dns le cas de l'initiation d'un article et modifs
  const contentId = aActuId || 0;
  const selectedContent = contents[contentId];

  const getContentByIdA = contents.find(content => content.id == contentId)
  // en faire un seul personnalisé.

  // Dns le cas de la consultation d'un article
  const contentIdR = redirId || 0;
  const selectedContentR = contents[contentIdR];

  const getContentById = contents.find(content => content.id == contentIdR)
  console.log(getContentById + 'get content by id.')
  console.log(JSON.stringify(getContentById) + 'get content by id.')
  // probleme y a comme un bout de tableau et autres elements renvoyés, ya pas QUE, l'objet
  console.log(JSON.stringify(getContentById.title) + "title avev getContentID")
  console.log(JSON.stringify(contents[contentIdR]) + 'contents[contentIdR]')
  // faire en sorte que cette const soit universelle et utilisable de tous.
  // a la place de redirID mettre une valeur qui s'adapte aussi a actuId, ou faire en sorte que chq element 
  // qui utilise cette méthode envoie son ip comme translated.
  // + pb -> la ca vient chercher automatiquement l'id à la racine de contents.

  // !!!
  const editTextUniversel = (value, eKey, aKey) => {

    const updatedContents = [...contents];
    
    updatedContents.find(content => content.id == contentId).Acontent.find(c => c.num === eKey).value = value;
    // [contentId].Acontent[eKey].value = value;
    // recuperer l'element par son id, PAS SON PLACEMENT.

    setContents(updatedContents);
  }

  // const delTextUniversel = (eKey) => {


  //   setContents(prevContents => {
  //     const updatedContents = [...prevContents];
  
  //     // Trouver l'index de l'élément dans le tableau contents
  //     // const contentIndex = updatedContents.findIndex(content => content.id === contentId);

  //     // Copie du tableau Acontent filtré
  //     const newCDeux = updatedContents[contentId].Acontent.filter(c => c.num !== eKey);
  //     console.log(newCDeux + "NEWCDEUX")
  
  //     // Mise à jour du tableau Acontent dans l'objet contents
  //     updatedContents[contentId] = {
  //       ...updatedContents[contentId],
  //       Acontent: newCDeux,
  //     };
  
  //     // if (contentIndex !== -1) {
        
  //     // }
  
  //     return updatedContents;
  //   });

  const delTextUniversel = (eKey) => {

    setContents(prevContents => {
      
      return prevContents.map(content => {
        if (content.id === contentId) {
          // const newCDeux = content.Acontent.filter(c => c.num !== eKey);
          return {
            ...content,
            Acontent: [...content.Acontent.find(c => c.num === eKey)]
          };
        }
        return content;
      });
    });
  }

  // const createUniverselText = (value, type, eKey, aKey,) => {
    
  //   const newContent = { num: selectedContent.Acontent.length, value: value, type: type };

  //   setContents(prevContents => {
  //     const updatedContents = [...prevContents];
  //     updatedContents[contentId] = {
  //       ...updatedContents[contentId],
  //       Acontent: [...updatedContents[contentId].Acontent, newContent]
  //     };
  //     return updatedContents;
  //     // Modifier à partir de l'id reelle, pas du positinement.
  //   });
  // }

  const createUniverselText = (value, type, eKey, aKey) => {
    setContents(prevContents => {
      return prevContents.map(content => {
        if (content.id === contentId) {
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
            <Title textVal={getContentByIdA.title} editTitleVal={editTitleVal}/>
            {/* changer le title edit aussi. */}
            {/* Foonctionne tres bien mais changer tout le reste car les modifs ne se font plus au bon endroit (changement de tire, ajout contenu...) */}
          </div>

          {/* selectedContent */}

          <p>{getContentByIdA.description}</p>

          <ul className="flex gap-5 justify-between flex-col">
            {getContentByIdA.Acontent.map((content) =>        
              <TextUniversel sContent={getContentByIdA.id} textVal={content.value} edit={editTextUniversel} type={content.type} eKey={content.num} contents={contents} delUText={delTextUniversel}/>
            )}
          </ul>

          <AddContent createUniverselText={createUniverselText}/>
          <DelArticleBtn idS={contentId} contents={contents} setContents={setContents} deleteArticle={deleteArticle} />
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
        <h1>{getContentById.title}</h1>
        {/* Utilisation du getContentById oppérationnel, peut etre encore qlq soucis. */}
        {/* Mais quand suppr, premier article... probleme */}

        {/* Dissonnance entre l'id et le placement dans le tableau qui rend le titre illisible. par exemple place = 0, mais id 2 ->
        dissonance du à une suppression, il faudrai utiliser un filter pour recup les contents uniquement grace à l'id (on ne peut plus faire 
        confiance au placement dans le tableau. avant ct simple puisque id etait = a place dans le tableau puisqu il etait set en fonction, 
        donc on pouvait recuperer l'id et s'en servir pour recuperer en fonction de la place dans le tableau.) Et DESORMAIS IL FAUDRA FAIRE CA
        POUR CHAQUE CHOSE, pareil pour la page d'edit et le reste. pareil pour suppression de contenu(s) */}
        <p>{getContentById.description}</p>

        {/* Apparition du texte différente en fonction de son type + aucune apparition si pas de contenu. */}
        <ul className="flex gap-5 justify-between flex-col">
          {getContentById.Acontent.map((content) =>              
            <p>{content.value}</p>
          )}
        </ul>

        <NavToEdit id={getContentById.id} passIdToApp={getId}/>
        {/* Apparait uniquement si la personne à les droits sur cet article + emmene vers la page de modification. */}

      </div>
    }
  ])
  return <div>
    <RouterProvider  router={router} contents = { contents }/>
  </div>
  
}

export default App;