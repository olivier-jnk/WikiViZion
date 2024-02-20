import React from 'react';
import searchImg from '../img/search.png';

function SearchBar () {

    return <div class=" mx-auto p-6 rounded-md w-full">
        <div class="relative">
            <input type="text" class="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none" placeholder="Chercher un article..."/>
            <button className="absolute right-0 top-0 mt-2 mr-2">
                <img className="h-5 w-5 text-gray-500" src={searchImg}/>
            </button>
        </div>
    </div>
};

export default SearchBar