import React from 'react'
import Task from './task';
import AddTask from './addTask';
import { connect } from 'react-redux';
import { number, string } from 'prop-types';

class SingleCard extends React.Component{
     
    render(){
        const { name, id, tasks } = this.props;
        const taskID = Date.now();

        return(
            <div className="single-card" id={id}>
                <div className="head-of-card">
                    <div className="task-numbers">
                        <p>{tasks.length}</p>
                    </div>
                    <h3>{name}</h3>
                    <AddTask createTask={this.props.createTask} taskID={taskID}/>
                </div>
                <div className="tasks-container">         
                    {
                        tasks.map(task =>
                            <Task 
                                name={task.name}
                                creator={task.creator}
                                key={task.id}
                                id={task.id}
                            />
                        )
                    }
                </div>
                
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
        createTask(name, creator, id, deadline, selectedOption, details, something) {
            const createTaskAction = {
                type: 'CREATE_TASK',
                task: {
                    name, 
                    creator,
                    id,
                    deadline,
                    selectedOption,
                    details,
                    something
                }
            };

            dispatch(createTaskAction);
        }

        
    };
}

SingleCard.propTypes = {
    name: string.isRequired,
    id: number.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleCard);