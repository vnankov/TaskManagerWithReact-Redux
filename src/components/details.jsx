import React from 'react'
import { Link } from 'react-router-dom'
import TaskDetails from './taskDetails';
import { connect } from 'react-redux'

class Details extends React.Component{

    render(){
        const { tasks } = this.props;
        return(
            <div>
                <h1>Details section</h1>
                <Link to='/'>Go back</Link>
                <div className="details-task">
                    {
                        tasks.map(task =>
                            <TaskDetails 
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


export default connect(mapStateToProps)(Details);