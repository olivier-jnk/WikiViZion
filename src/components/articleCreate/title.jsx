import React, { useState } from "react";

function Title ({textVal, editTitleVal}){


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
                {/* recuperer la valeur du txt area + le modifier. */}
                <textarea onChange={(event) => editTitleVal(event.target.value)}>{textVal}</textarea>
                {/* onChange mettre à jour le texte dans l'objet et le recuperer directement pour affichage. */}
            </div>
            
        ) : (
            <div className='flex flex-col'>
                <p onClick={() => modify(0)}>{textVal}</p>
            </div>
            
        )}
        </div>

    )
    

}


export default Title