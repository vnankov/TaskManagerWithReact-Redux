import React from 'react'
import SingleCard from './singleCard';
import { connect } from 'react-redux';
import AddColumn from './addColumn';

class Cards extends React.Component{


    render(){
        const { todos } = this.props;

        return(
            <div className="all-cards">
                    {
                        todos.map(todo =>
                            <SingleCard name={todo.name}
                                key={todo.id}
                                id={todo.id}
                            />
                        )
                    }
                <AddColumn createColumn={this.props.createColumn}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { todos } = state;

    return {
        todos: todos    
    };
}

function mapDispatchToProps(dispatch) {
    return {  
        createColumn(name) {
            const createColumnAction = {
                type: 'CREATE_TODO',
                todo: {
                    name
                }
            };

            dispatch(createColumnAction);
        }

        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
