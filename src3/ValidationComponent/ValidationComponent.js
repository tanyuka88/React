import React from 'react';


const ValidationComponent = (props) =>{
    let valMessage = 'Text long enough!';

    if (props.lengthText<5){
        valMessage = 'Text too short!';
    }

    return(
        <div>
           <p>{valMessage}</p>
        </div>
   )
};

export default ValidationComponent;