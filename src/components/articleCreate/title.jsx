import React, { useState } from "react";

// Surement renommer maintenant ce component, qui peut désormais, également prendre en compte les descriptions. + voir peut-etre pour
//-> Universaliser TextUniversel, de sorte à ce qu'il prenne en compte tous type de textes (peut-etre complexe.)

function Title ({textVal, editTitleVal, type}){


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
    
    return( 
        <div>
        {isTextarea ? (
            <div className='group flex flex-col'>
                <button className='invisible group-hover:visible' onClick={() => modify(1)}>enregistrer</button>
                <textarea onChange={(e) => editTitleVal(e.target.value,type)}>{textVal}</textarea>
            </div>
            
        ) : (
            <div className='flex flex-col'>
                <h2 className='font-bold' onClick={() => modify(0)}>{textVal}</h2>
            </div>
        )}
        </div>
    )
}

export default Title