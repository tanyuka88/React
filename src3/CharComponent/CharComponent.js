import React from 'react';
import './CharComponent.css';

const CharComponent = (props) =>{
    return(
        <p className='charComp' onClick={props.clicked}>{props.eachLetter}</p>
    )

};

export default CharComponent;
