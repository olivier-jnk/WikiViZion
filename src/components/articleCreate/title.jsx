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
                <textarea onChange={(e) => editTitleVal(e.target.value)}>{textVal}</textarea>
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