import React, { Component } from 'react';
import './styles/slyle.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
    constructor(props){
        super(props);
        this.state={
            length:null,
            stringInput:''
        }
    }


    lengthText = (event) =>{
        const newText = event.target.value;
        const length = newText.length;
        this.setState({
            length: length,
            stringInput:newText
        })
    };

    deleteLetter=(index)=>{
        const text= this.state.stringInput.split('');
        text.splice(index,1);
        const updatedText = text.join('');
        this.setState({
            stringInput:updatedText
        })
    };

    render() {
        const letters=(
            <div>
                {this.state.stringInput.split('').map((index,i)=>{
                    return <CharComponent key={i} eachLetter={index} clicked={()=>{this.deleteLetter(i)}} />
                })}
            </div>
        );

        return (
            <div className="App">
                <input type='text' onChange={this.lengthText} value={this.state.stringInput} />
                <ValidationComponent lengthText={this.state.stringInput.length} />
                {letters}
            </div>
        );
    }


}

export default App;

