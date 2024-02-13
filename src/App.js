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

const router = createBrowserRouter(({contents},{handleAddArticle})=>[
  {
    path : '/',
    element: 
    
    <div className='flex w-screen justify-center items-start flex-col'>
       <Header/>
       <Fcontent contents={contents}/>
    </div>

  },
  {
    
    path : '/new-article',
    
    element:

    <div className='flex w-screen h-full justify-start items-center flex-col'>
      <Header/>
      <InitArticle onAddArticle={handleAddArticle}/>

    </div>

  },
  {
    path: '/article/:id',
    element: <div>Article
    </div>
  },
])

function App() {

  const [contents, setContents] = useState([
    { miniature: panda, title: 'red panda' },
    { miniature: mandarinDucks, title: 'mandarin duck' },
    { miniature: bun, title: 'bun' },
  ]);
  
  const handleAddArticle = (newArticle) => {
    setContents([...contents, newArticle]);
  };

  const [user, setUser] = useState({})
  // -> systeme de compte. 
  return <div>

    <RouterProvider contents = { contents } handleAddArticle = {handleAddArticle} router={router}/>
  </div>
  
}

export default App;