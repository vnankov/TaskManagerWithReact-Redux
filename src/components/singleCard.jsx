import React from 'react'
import Task from './task';
import AddTask from './addTask';
import { connect } from 'react-redux';


class SingleCard extends React.Component{


    render(){
        const { name, id, tasks } = this.props;
        return(
            <div className="single-card" id={id}>
                <div className="head-of-card">
                    <div className="task-numbers">
                        <p>1</p>
                    </div>
                    <h3>{name}</h3>
                    <AddTask createTask={this.props.createTask}/>
                </div>
                           
                {
                    tasks.map(task =>
                        <Task name={task.name}
                            key={task.id}
                            id={task.id}
                        />
                    )
                }
                    
                
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { tasks } = state;

    return {
        tasks: tasks    
    };
}

function mapDispatchToProps(dispatch) {
    return {  
        createTask(name, id) {
            const createTaskAction = {
                type: 'CREATE_TASK',
                task: {
                    name, 
                    id
                }
            };

            dispatch(createTaskAction);
        }

        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCard);