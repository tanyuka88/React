import React from 'react';
import './UserInput.css'

const UserInput = (props) =>{
    return(
        <input type='text' onChange={props.eventHandler} value={props.name} />
    )
};

export default UserInput;




/*
const template = Object.keys(data.books).map(item =>
    <span key={data.books[item].id}>
        {data.books[item].author} - {data.books[item].name}
    </span>)



import data from './books.json'
{
    "books": {
        "book1": {
            "id": 1,
            "name": "Sample",
            "author": "Somebody",
            "genre": "Tales"
        },
        "book2": {
            "id": 2,
            "name": "Winter",
            "author": "Ted"
        }
    }
}
 */