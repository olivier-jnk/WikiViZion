import React, { useState } from 'react';

function TextModify() {
  const [isTextarea, setIsTextarea] = useState(false);
  let [text, setText] = useState('text');
  // utiliser plus tard directement l'objet contents

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
            <textarea>{text}</textarea>
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