import React, { useState } from 'react'
import {RouterProvider, createBrowserRouter, Link} from 'react-router-dom'
import Header from './components/header';
// import './App.css';
import Navbar from './components/navbar';
import Fcontent from './components/fcontent';

const router = createBrowserRouter([
  {
    path : '/',
    element: 
    
    <div className='flex w-screen justify-center items-start flex-col'>
       <Header/>
       <Fcontent/>
    </div>

  },
  {
    path : '/new-article',
    
    element:

    <div className='flex w-screen h-full justify-start items-center flex-col'>
       <Header/>
      <header>
        
        <h1 className='font-bold justify-self-center'>Creer un nouvel Article !</h1>

      </header>


      <form className= 'bg-[#E6A160] flex p-10 flex-col rounded-lg gap-5'>
        <label for="title">Titre de l'article:</label>
        <input type="text" id="title" name="title" placeholder='Insérez votre titre...'required></input>

        <label for="title">description:</label>
        <input type="text" id="description" name="description" placeholder="de quoi l'article va parler..."required></input>
        <label for='p1'>Premier paragraphe</label>
        <textarea id="p1" name="p1" />

        <button type="button" onclick="submitArticle()" className='bg-slate-50' >Creer un article</button>

      </form>
    </div>

  },
  {
    path: '/article/:id',
    element: <div>Article
    </div>
  },
])

function App() {

  const [user, setUser] = useState({})
  // -> systeme de compte. 
  return <div>

    <RouterProvider router={router}/>
  </div>
  
}

export default App;