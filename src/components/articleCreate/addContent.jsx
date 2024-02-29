import React, { useState } from "react";

function AddContent ({ createUniverselText }) {


    return(
        <div className='group flex flex-col'>

            {/*  */}

            <div className=" invisible group-hover:visible bg-gray-200 border border-gray-300 rounded-md flex items-center justify-between p-2">
                <div onClick={() => createUniverselText('Ceci est un titre que vous pouvez entièrement modifier', 'title')}>
                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Titre
                </div>
                <div onClick={() => createUniverselText('Ceci est un paragraphe que vous pouvez modifier intégralement', 'paragraphe')}>
                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Paragraphe
                </div>
            </div>
            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' >Ajouter du contenu</button>
            {/* onClick={() => createUniverselText('salut', 'paragraphe')} */}
        </div>
    )

    

}


export default AddContent;