import React from 'react'

class AddColumn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            todoName : ''
        }
        this.addColumn = this.addColumn.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    addColumn(ev){
        ev.preventDefault();
        if(this.state.todoName !== ''){
            this.props.createColumn(this.state.todoName)
            this.setState({todoName : ''})
        }
    }
    onChange({target}){
        this.setState({ todoName : target.value})
    }

    render(){
        return(
            <form onSubmit={this.addColumn}>
                <button className="add-card">
                    <h3>+ Add Column</h3>
                </button>   
                <input 
                    type='text' 
                    onChange={this.onChange} 
                    value={this.state.todoName}/>

            </form>
        )
    }
}

export default AddColumn;