import React from 'react'
import { Link } from 'react-router-dom'
import { string } from 'prop-types';

class Task extends React.Component{

    render(){
        const { name, creator, id } = this.props;

        return (
            <div className="task" id={id}>
                <h3>{name}</h3>
                <p>Created by {creator}</p>
                <Link to="/details">
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