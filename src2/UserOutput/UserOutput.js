import React from 'react';

const UserOutput = (props) =>{
    const style = {
        border:'2px solid red'
    };
    return(
        <div style={style}>
            <p>{props.userName}</p>
            <p>Sasha</p>
        </div>
    )
};

export default UserOutput;