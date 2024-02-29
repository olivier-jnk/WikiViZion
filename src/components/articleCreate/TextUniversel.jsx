import React, { useState } from "react";

function TextUniversel ({sContent, textVal, edit, type, aKey, eKey, contents}){
    // mettre type + clé de l'element + clé de l'article.
    // passer à edit, type et clé.
    const eKeyV = eKey || 0;
    const sContentV = parseInt(sContent) || 0
    

    const textValV = textVal;
    //  (contents[sContentV]?.Acontent?.[eKeyV])

    const [isTextarea, setIsTextarea] = useState(false);

    const modifyToTextArea = () => {
        setIsTextarea(true);
    };

    const modifyToP = () => {
        setIsTextarea(false);
    };

    const modify = (txtArea ) => {
        if(txtArea > 0){
            modifyToP();
        }else{
            modifyToTextArea();
        }
    };

    // paragraphe ou titre.

    if(type === 'paragraphe'){
        return( 
        
            <div>
            {isTextarea ? (
                <div className='group flex flex-col'>
                    <button className='invisible group-hover:visible ' onClick={() => modify(1)}>enregistrer</button>
                    <textarea onChange={(e) => edit(e.target.value, eKeyV)}>{textValV}</textarea>
                </div>
                
            ) : (
                <div className='flex flex-col'>
                    <p onClick={() => modify(0)}>{textValV}</p>
                </div>
                
            )}
            </div>
        )

    } 
    else if (type === 'title'){
        // mettre plusieurs degrés de title (h1, h2...)
        return( 
        
            <div>
            {isTextarea ? (
                <div className='group flex flex-col'>
                    <button className='invisible group-hover:visible' onClick={() => modify(1)}>enregistrer</button>
                    <textarea onChange={(e) => edit(e.target.value, eKeyV)}>{textValV}</textarea>
                </div>
                
            ) : (
                <div className='flex flex-col'>
                    <h3 className='font-bold' onClick={() => modify(0)}>{textValV}</h3>
                </div>
                
            )}
            </div>
        )
    }

}

export default TextUniversel;