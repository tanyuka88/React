import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
//     // getName(lastname){
//     //     return "Aleksay"+lastname;
//     // }
//
//
//   render() {
//       // var i=5;
//       // var myStyle={
//       //     color:'green',
//       //     fontSize:20
//       // }
//
//
//     return (
//       // var elem=<h1>Hello</h1>;
//
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p /*style={myStyle}*/ data-myattribute="somevalue">
//               {/*{this.getName("Ivanov")}*/}
//               {/*{i==5?"True":"False"}*/}
//
//
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            persons:[
                {id:'wre', name:'Max', age:28},
                {id:'wer', name:'Tank', age:29},
                {id:'sdf', name:'Anya', age:26}
            ],
            otherState:'Tanyaaaaa',
            showPersons:false
        };
    }

    deletePersonHandler=(personIndex)=>{
        const persons = [...this.state.persons]; //spread
        persons.splice(personIndex,1); // c 1 удаляет 1 элемент
        this.setState({persons:persons});
    };

    nameChangedHandler=(event, id)=>{
        const personIndex = this.state.persons.findIndex( p =>{
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
    };
         //const person = Object.assign({}, this.state.persons[personIndex]);
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
            })
    };

    togglePersonsHandler=()=>{
        this.setState({showPersons: !this.state.showPersons});
    };

    render(){
        const style={   //Working with inline style
            backgroundColor:'white',
            font:'inherit',
            border:'1px solid blue',
            padding:'8px',
            cursor:'pointer'
        };
        let persons = null;

        if(this.state.showPersons){
            persons = (
            <div>
                {this.state.persons.map((person, index)=>{
                    return <Person key={person.id} click={()=>this.deletePersonHandler(index)} name={person.name} changed={(event)=>this.nameChangedHandler(event, person.id)} age={person.age}/>
                })}
            </div>);
        }

        return (
            <div className="App">
                <h1>Hello, world</h1>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>  {/*we want to pass a value to our function(newName)*/}
                {persons}
            </div>
        )
    }
}
export default App;
