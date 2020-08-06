import React, {Component} from 'react';

class Table extends Component{
    constructor(){
        super()
        this.state = {
            message:'Welcome to India'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thanks for visiting'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>OnClick</button>
            </div>
        
        )
    }
}

export default Table;

