import React, { useState } from "react";

function TextUniversel ({textVal, edit}){


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
                <textarea onChange={(e) => edit(e.target.value)}>{textVal}</textarea>
            </div>
            
        ) : (
            <div className='flex flex-col'>
                <p onClick={() => modify(0)}>{textVal}</p>
            </div>
            
        )}
        </div>
    )
    

}

export default TextUniversel;