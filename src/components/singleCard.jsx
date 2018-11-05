import React from 'react'
import Task from './task';
import AddTask from './addTask';
import { connect } from 'react-redux';
import { number, string } from 'prop-types';

class SingleCard extends React.Component{
     
    render(){
        const { name, id, tasks } = this.props;
        let number = [];
        number.push(tasks.filter(l => l.taskID === id))

        return(
            
            <div className="single-card" id={id}>
                <div className="head-of-card">
                    <div className="task-numbers">
                        <p>{number[0].length}</p>
                    </div>
                    <h3>{name}</h3>
                    <AddTask createTask={this.props.createTask} taskID={id}/>
                </div>
                    {
                        tasks.filter(l => l.taskID === id)
                        .map(task =>
                            <Task 
                                name={task.name}
                                creator={task.creator}
                                key={task.id}
                                id={id}
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
        tasks 
    };
}

function mapDispatchToProps(dispatch) {
    return {  
        createTask(name, creator, deadline, selectedOption, details, taskID,id) {
            const createTaskAction = {
                type: 'CREATE_TASK',
                task: {
                    name, 
                    creator,
                    deadline,
                    selectedOption,
                    details,
                    taskID,
                    id
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