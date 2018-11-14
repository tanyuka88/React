import React, { Component } from 'react';
import './App.css';
// import UserInput from './UserInput/UserInput'
// import UserOutput from './UserOutput/UserOutput'


// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       userName:'Misha!'
//     }
//   }
//
//   eventHandler=(event)=>{
//     this.setState({
//         userName: event.target.value
//     })
//   };
//
//   render() {
//    return (
//         <div className='App'>
//           <UserInput eventHandler={this.eventHandler} name={this.state.userName}/>
//           <UserOutput userName={this.state.userName} />
//         </div>
//     );
//   }
// }
//
// export default App;
//



class App extends Component {
    constructor(props){
        super(props);
        this.state={
            switchOn:true
        }
    }

    eventHandler=()=>{
        this.setState({
            switchOn: !this.state.switchOn
        })
    };

    render() {
        let message;
        if(this.state.switchOn){
            message = 'Switch On';
        }
        else{
            message = 'Switch OFF';
        }
        return (
            <div className='App'>
                <label className='switchButton'>
                    <input type='checkbox' onChange={this.eventHandler} defaultChecked={this.state.switchOn}/>
                    <span className='slider' />
                </label>
                <form className='form' type='text'>
                    <input type='text' value={message} />
                </form>
            </div>

        );
    }
}

export default App;

