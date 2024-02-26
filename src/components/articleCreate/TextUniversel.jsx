import React, { useState } from "react";

function TextUniversel ({textVal, edit, type, aKey, eKey, contents}){
    // mettre type + clé de l'element + clé de l'article.
    // passer à edit, type et clé.
    console.log(eKey + 'eKey (clé de l element)')

    

    const eKeyV = eKey || 0;
    console.log(eKeyV + "EkeyV")

    const textValV = (contents[contents.length - 1]?.Acontent?.[eKeyV]) || textVal;

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
                    <button className='invisible group-hover:visible' onClick={() => modify(1)}>enregistrer</button>
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
                    <p onClick={() => modify(0)}>{textValV}</p>
                </div>
                
            )}
            </div>
        )
    }

}

export default TextUniversel;