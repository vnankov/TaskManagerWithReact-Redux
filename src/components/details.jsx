import React from 'react'
import { Link } from 'react-router-dom'


class Details extends React.Component{

    render(){
        const {name, creator, deadline, selectedOption, details} = this.props.location.state;

        return(
            <div>
                <h1>Details section</h1>
                <Link to='/' >Go back</Link>
                <div className="details-task">
                    <div className="lightblue-task-details">
                        <div><h3>Name of the task :</h3> <span>{name}</span></div>
                        <div> <h3>Priority status :</h3> <span>{deadline}</span></div>
                        <div> <h3>Selected option :</h3> <span>{selectedOption}</span></div>
                        <div><h3>Additional description :</h3> <span>{details}</span></div>
                        <div><h3>Created by :</h3> <span>{creator}</span></div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Details;