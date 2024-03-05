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
  // const [redirId, setRedirId] = useState();
  const initialRedir = 0;

  const [redirId, setRedirId] = useState(() => {
    const redirIdStorage = localStorage.getItem('redirId');
    return redirIdStorage ? JSON.parse(redirIdStorage) : initialRedir;
  });

  useEffect(() => {
    localStorage.setItem('redirId', JSON.stringify(redirId));
  }, [redirId]);

  console.log(redirId + "actu redirID")

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

  const editTextUniversel = (value, eKey, aKey) => {

    const updatedContents = [...contents];
    
    updatedContents.find(content => content.id == contentId).Acontent.find(c => c.num === eKey).value = value;

    setContents(updatedContents);
  }

  const delTextUniversel = (eKey) => {

    setContents(prevContents => {
      
      return prevContents.map(content => {
        if (content.id === contentId) {
          console.log(eKey + "EKEY.NUM")
          console.log(JSON.stringify(content.Acontent.filter(c => c.num == eKey)) + 'Content filter a supp.')
          return {
            ...content,
            Acontent: [...content.Acontent.filter(ctn => ctn.num != eKey)]
          };
          
        }
        console.log(JSON.stringify(content + "content juste avant le return"))
        return content;
        // faire les modifs a ce niveau la pour que les modifications soient faites en live, jouer avec le localStorage et/ou le setContents
        // Ce que je comprend pas c'est que, NORMALEMENT, le redirId est à jour, donc, ca devrai générer la bonne page.
        // Peut etre que le window.location refresh la valeur de redirID ? Surement -> donc mettre un coup de localStorage.
        //-> C'est reglé pour le rediRID (localStorage) Et Pourtant -> la nav par url (normal- aucune modif redirId) ne fonctionne tjr pas ni pour la suppression.
        //-> Pourtant avc un changement manuel de l'id dans localStorage +et un refresh le changement de contenu s'effectue.
      });
    });
  }

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
              <TextUniversel passIdToApp={getIdClick} idS={getContentById.id} textVal={content.value} edit={editTextUniversel} type={content.type} eKey={content.num} contents={contents} delUText={delTextUniversel}/>
              // PassIdToApp peut etre pas utile finallement.
              // Pourtant l'id dans la barre de recherche est bonne mais le contenu et mauvais.
              // Tres dommage ca, peut importe la valeur http://localhost:3000/new-article/:3 ou : 4 ou :5 le contenu restera celui de 
              // redPanda si les bonnes modifications ne sont pas effectuées.
              //-> Ca vaut pour page de modification d'article mais aussi, pour la page de consultation...
              //-> Trouver un autre moyen pour que l'id aille chercher le contenu en fonction.
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
        {/* Changer l'utilisation de getContentById par qlq chose qui récupère les contenus en fonction de redirId, ... je
        crois que c'est déjà le cas ? */}

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