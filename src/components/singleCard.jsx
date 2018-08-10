import React from 'react'
import Task from './task';

class SingleCard extends React.Component{


    render(){
        const { name, id } = this.props;
        return(
            <div className="single-card" id={id}>
                <div className="head-of-card">
                    <div className="task-numbers">
                        <p>1</p>
                    </div>
                    <h3>{name}</h3>
                    <div className="add-task"> 
                        <p>+</p>
                    </div>
                </div>
                <div>
                    <Task nameOfTask="First Task Ever"/>
                </div>
            </div>
        )
    }
}

export default SingleCard;