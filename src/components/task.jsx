import React from 'react'

class Task extends React.Component{

    render(){
        const { name, creator, idTask } = this.props;

        return (
            <div className="task" id={idTask}>
                <h3>{name}</h3>
                <p>{creator}</p>
                <button>
                    Details..
                </button>
            </div>
        );
    }
}

export default Task;