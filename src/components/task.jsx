import React from 'react'
import { Link } from 'react-router-dom'
import { string } from 'prop-types';

class Task extends React.Component{

    render(){
        const { name, creator, deadline, selectedOption, details } = this.props;

        return (
            <div className="task" >
                <h3>{name}</h3>
                <p>Created by {creator}</p>
                <Link to={{ pathname: '/details', state: { name, creator, deadline, selectedOption, details} }}>
                    <button>
                        Details..
                    </button>
                </Link>
            </div>
        );
    }
}

Task.propTypes = {
    name: string.isRequired,
    creator: string.isRequired
}

export default Task;