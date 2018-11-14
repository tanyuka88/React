import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//
// class PersonList extends React.Component {
//     render(){
//
//     let array2 =[1, 2, 3, 4, 56, 798];
//     let array1 = [];
//     array2.forEach((item, i, array2)=>{array1.push(item)});
//
//     return <div>{array1}</div>;
//     }
// }


ReactDOM.render(<App  />, document.getElementById('root'));
registerServiceWorker();
