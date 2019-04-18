import React from 'react'
import  Cards from './cards';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from './details'
import todoReducer from '../reducer/rootReducer';

const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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