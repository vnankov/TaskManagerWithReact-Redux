import React from 'react'
import  Cards from './cards';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from './details'


const store = createStore(function todosReducer(state = { todos: [], filter: "", tasks: [] }, action) {
    switch(action.type) {
        case 'CREATE_TODO':
            return {... state, 
            todos: [...state.todos, { id: Math.random(), name: action.todo.name}]
            };
        case 'CREATE_TASK':
            return {... state, 
            tasks: [...state.tasks,{
                    id: Math.random(),
                    name: action.task.name,
                    creator: action.task.creator,
                    deadline: action.task.deadline,
                    selectedOption: action.task.selectedOption,
                    details: action.task.details,
                    taskID: action.task.taskID
                }]
            };
  
      default:
        return state;
    }
  },window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Wrapper extends React.Component{

    render(){
        return(
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact  path="/" component={Cards} />
                        <Route path="/details" component={Details} />
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default Wrapper;