import React, { useState } from "react";
import DelContentBtn from "./delContent";

function TextUniversel ({idS, textVal, edit, type, aKey, eKey, contents, passIdToApp, delUText}){
    // mettre type + clé de l'element + clé de l'article.
    // passer à edit, type et clé.
    const eKeyV = eKey || 0;
    const sContentV = parseInt(idS) || 0
    

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

    if(type === 'paragraphe'){
        return( 
        
            <div>
            {isTextarea ? 
                <div className='group flex flex-col'>

                    <div className='invisible group-hover:visible flex gap-5'>

                        <button onClick={() => modify(1)}>Enregistrer</button>
                        <DelContentBtn passIdToApp={passIdToApp} id={idS} eKey={eKey} delUText={delUText}/>
                    </div>
                    
                    <textarea onChange={(e) => edit(e.target.value, eKeyV)}>{textValV}</textarea>
                </div>
                
             : (
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
                    <div className='invisible group-hover:visible flex gap-5'>
                        <button onClick={() => modify(1)}>Enregistrer</button>
                        <DelContentBtn passIdToApp={passIdToApp} id={idS} eKey={eKey} delUText={delUText}/>
                    </div>
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
// component pour eviter répétition ? peut etre pas.

export default TextUniversel;