import React from 'react'
import Cards from './cards';
import Filter from './filter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(function todosReducer(state = { todos: [], filter: "" }, action) {
    switch(action.type) {
      case 'CREATE_TODO':
        return Object.assign({}, state, {
          todos: [...state.todos, { id: Math.random(), name: action.todo.name, isCompleted: false }]
        });
  
      default:
        return state;
    }
  });

class Wrapper extends React.Component{

    render(){
        return(
            <Provider store={store}>
            <div>
                <div className="header-of-todo">
                    <h1> Create Todo Task Manager </h1>
                    <Filter />
                </div>
                <Cards />
            </div>
            </Provider>
        )
    }
}

export default Wrapper;