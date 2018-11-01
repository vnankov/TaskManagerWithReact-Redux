import React from 'react'
import { number, string } from 'prop-types';

class TaskDetails extends React.Component{

    render(){
        const { name, creator, id, deadline,details, selectedOption } = this.props;

        return (
            <div className="lightblue-task-details" id={id}>
                <div><h3>Name of the task :</h3> <span>{name}</span></div>
                <div> <h3>Priority status :</h3> <span>{deadline}</span></div>
                <div> <h3>Selected option :</h3> <span>{selectedOption}</span></div>
                <div><h3>Additional description :</h3> <span>{details}</span></div>
                <div><h3>Created by :</h3> <span>{creator}</span></div>
                
            </div>
        );
    }
}

TaskDetails.propTypes = {
    name: string.isRequired,
    creator: string.isRequired,
    deadline: string.isRequired,
    selectedOption: string.isRequired,
    id: number.isRequired
}
export default TaskDetails;