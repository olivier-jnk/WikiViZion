import React, { useState } from 'react';

function TextModify({ editContent, contents }) {
  const [isTextarea, setIsTextarea] = useState(false);
  // const text = contents[contents.length - 1].Acontent[0] || 'text';
  console.log(contents[contents.length - 1].Acontent)
  // utiliser plus tard directement l'objet contents
  let text = 'text';

  const modifyToTextArea = () => {
    setIsTextarea(true);
  };

  const modifyToP = () => {
    setIsTextarea(false);
  };

  const modify = (txt, txtArea ) => {
    // setText = txt;
    if(txtArea > 0){
        modifyToP();
    }else{
        modifyToTextArea();
    }
  };

  return (
    <div>
      {isTextarea ? (
        <div className='group flex flex-col'>
            <button className='invisible group-hover:visible' onClick={() => modify("text", 1)}>enregistrer</button>
            {/* recuperer la valeur du txt area + le modifier. */}
            <textarea id='text1' >{text}</textarea>
            {/* onChange={(e) => editContent(e.target.id,e.target.value)} */}

            {/* id aleatoire */}
            {/* onChange mettre à jour le texte dans l'objet et le recuperer directement pour affichage. */}
            
        </div>
        
      ) : (
        <div className='group flex flex-col'>
            <button className='invisible group-hover:visible' onClick={() => modify("text", 0)}>modifier</button>
            <p>{text}</p>
        </div>
        
      )}
    </div>
  );
}

export default TextModify;