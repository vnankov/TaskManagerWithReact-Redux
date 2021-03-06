import React from 'react'
import Task from './task';
import AddTask from './addTask';
import { connect } from 'react-redux';
import { number, string } from 'prop-types';
import { CREATE_TASK } from '../constants/constants';

function SingleCard({ name, id, tasks, createTask }){
    let numbersOfTasks = [];
    numbersOfTasks.push(tasks.filter(task => task.taskID === id))
    return(
        <div className="single-card" id={id}>
            <div className="head-of-card">
                <div className="task-numbers">
                    <p>{numbersOfTasks[0].length}</p>
                </div>
                <h3>{name}</h3>
                <AddTask createTask={createTask} taskID={id}/>
            </div>
                {
                    tasks.filter(task => task.taskID === id)
                    .map(task =>
                        <Task 
                            name={task.name}
                            creator={task.creator}
                            deadline={task.deadline}
                            selectedOption={task.selectedOption}
                            details={task.details}
                            key={task.id}
                            id={task.id}
                        />
                    )
                }
        </div>
    )
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
                type: CREATE_TASK,
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