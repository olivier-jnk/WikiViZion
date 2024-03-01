import React, { useState, useEffect } from 'react'
import { json, useNavigate } from 'react-router-dom';
import {RouterProvider, createBrowserRouter, Link} from 'react-router-dom'
import Header from './components/header/header';
// import './App.css';
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


// const articles = [] 
// mettre les articles en construction dans un tableau annexe, avant de les push dans le officiel.

function App() {

  const [user, setUser] = useState({})
  // -> systeme de compte. 

  const [titleA, setTitleA] = useState();
  const [aActuId, setAActuId] = useState();
  const [redirId, setRedirId] = useState();

  // const [contents, setContents] = useState([
  //   { id: 0, miniature: panda, title: 'red panda', Acontent: [
  //     { value:'salut',type: 'p' }, { value: 'salut2', type: 'p'}
  //   ]},
  //   { id: 1, miniature: mandarinDucks, title: 'mandarin duck', Acontent: [
  //     { value:'salut',type: 'p' }, { value: 'salut2', type: 'p'}
  //   ] },
  //   { id: 2, miniature: bun, title: 'bun', Acontent: [
  //     { value:'salut',type: 'p' }, { value: 'salut2', type: 'p'}
  //   ] },
  // ]);

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

  console.log(contents[3])

  
  
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
    
    // utiliser le akey à la place de selectionner le dernier article.

    // Cannot read properties of undefined (reading 'Acontent')

    // faire en sorte que > Adaptable pour tout type de page.
    // > Cibler l'article et le bon contenu.

    // selectedContent.Acontent = selectedContent.Acontent || {};

    const updatedContents = [...contents];

    console.log(updatedContents)
    
    // updatedContents[updatedContents.length - 1].Acontent[eKey] = value;
    // dans l'objet key, avec sa valeur, son id, son type.{}

    updatedContents[contentId].Acontent[eKey].value = value;
    // Fonctionne totalement comme ca (content.length - 1 ) mais pas correct, mais si selectedContent, c'est pas forcément l'idéal,
    // c'est bien mieux.
    // tout est réglé, il suffisait de mettre seulement l'id de l'article,seulement avec selectContent id, on a: selectedCOntent+ id...

    setContents(updatedContents);

    // ou alors -> setContents([...contents, newContent])

    // const lengthOfAcontent = Object.keys(contents[contents.length - 1].Acontent).length;

    // console.log(contents)
    
    // for(let i = 0; i < lengthOfAcontent; i++ ){
    //   console.log(contents[contents.length - 1].Acontent[i] + ' he')
    //   // fonctionne !
    // }
  }

  const createUniverselText = (value, type, eKey, aKey,) => {

    console.log("activated !")
    
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
      element: 
      <div className='flex w-screen h-full justify-center items-center flex-col gap-10'>
        <Header/>

        <div className='flex h-full flex-col gap-10' style={{ width: '60vw' }}>
          <div className='flex gap-10'>

            {/* <h1>{selectedContent.id}</h1> */}

            {/* Attention selectedContent se base sur aActuId qui correspond à l'id du dernier article créer.
            Optimal pour la premiere phase de creation, mais ne pas utiliser pour la consultation de l'article ou retouches ulterieurs. */}

            <Title textVal={selectedContent.title} editTitleVal={editTitleVal}/>
            {/* [selectedContent.title] */}

          </div>

          <p>{selectedContent.description}</p>


          <ul className="flex gap-5 justify-between flex-col">
            {selectedContent.Acontent.map((content) =>        
              <TextUniversel sContent={selectedContent.id} textVal={content.value} edit={editTextUniversel} type={content.type} eKey={content.num} content={contents}/>
              // type = content.type
              // <TextUniversel textVal={'Vous pouvez modifier ce texte à votre convenance'} edit={editTextUniversel} type={'title'} contents={contents} eKey={0}/>
              // textVal = content.value
            )}
          </ul>

          {/* Set les element dans le selectedContent.Acontent */}

          {/* <TextUniversel textVal={'Vous pouvez modifier ce texte à votre convenance'} edit={editTextUniversel} type={'title'} contents={contents} eKey={0}/>
          <TextUniversel textVal={'Celui-ci également'} edit={editTextUniversel} type={'paragraphe'} contents={contents} eKey={1}/> */}

          {/* -> Les deux restent liés car la clé est similaire. -> basé sur la valeur de content.lenght*/}
          {/* Gérer l'ajout et suppresion de contenu. */}

          {/* textVal={avec clé de l'article et clé de l'element pour pouvoir le modif. + donner à part la clé de l'article et de l'element} */}
          {/* + define la clé de chaque element + stocker son type... */}

          {/* Pour la géneration de l'article dans le bon ordre suivre les nombres qui seront set pour garantir le suivi de l'ordre.
          -> [0]h(type = H1, H2...)0, [1]p0, [2]image0, [3]p1  */} 
          {/* -> voir comment faire pour une modification plus complete de contenu -> bouts de texte en gras... */}

          {/* <h1>{selectedContent.title}</h1> */}

          {/* <p>{selectedContent.Acontent[0] + " ceci est le select content 1"}</p> */}
          {/* faire un map ou une boucle for pour générer la totalité des contenus. */}

          {/* Set des le départ les valeurs des champs à modif de base dans le AContent. et apres les génerer en html ou en géné auto. */}
          

          {/* faire la génération d'article dès ici, sinon je vois pas comment mettre en place l'ajout de contenu. */}
          {/* Ou alors ajout manuel du contenu bonus directement dans le dom. mais vaut mieux surement directement faire la génération auto. */}
          {/* -> PB, tant que les textUniversels ne sont pas modifiés, il n'apparaissent pas dans Acontent. */}

          {/* <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={() => createUniverselText('salut', 'paragraphe')}>Ajouter du contenu</button> */}

          <AddContent createUniverselText={createUniverselText}/>



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

        {/* <button onClick={() => }> Modifier l'article.</button> */}

        <NavToEdit id={selectedContentR.id} passIdToApp={getId}/>

        {/* Apparait uniquement si la personne à les droits sur cet article + emmene vers la page de modification. */}

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