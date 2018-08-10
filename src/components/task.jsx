import React from 'react'

class Task extends React.Component{

    render(){
        const { nameOfTask } = this.props;
        return(
            <div className="task">
                <p> {nameOfTask} </p>
            </div>
        )
    }
}

export default Task;