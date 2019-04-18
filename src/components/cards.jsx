import React from 'react'
import SingleCard from './singleCard';
import { connect } from 'react-redux';
import AddColumn from './addColumn';
import Filter from './filter';
import { CREATE_TODO } from '../constants/constants';

function Cards({ todos, createColumn }){
    return(
        <div>
            <div className="header-of-todo">
                <h1> Create Todo Task Manager </h1>
                <Filter />
            </div>
            <div className="all-cards">
                {
                    todos.map(todo =>
                        <SingleCard 
                            name={todo.name}
                            creator={todo.creator}
                            deadline={todo.deadline}
                            selectedOption={todo.selectedOption}
                            details={todo.details}
                            key={todo.id}
                            id={todo.id}
                        />
                    )
                }
                <AddColumn createColumn={createColumn}/>
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    const { todos } = state;
    return {
        todos  
    };
}

function mapDispatchToProps(dispatch) {
    return {  
        createColumn(name) {
            const createColumnAction = {
                type: CREATE_TODO,
                todo: {
                    name
                }
            };
            dispatch(createColumnAction);
        }

        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
