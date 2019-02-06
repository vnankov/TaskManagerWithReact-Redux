import React from 'react'
import { connect } from 'react-redux';

class Filter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
            this.props.filter(
                this.state.value
            )
            this.setState({value: event.target.value})
    }

    render(){
        let { filter } = this.props;
        console.log(filter)
        return(
            <div className="filter">
                <input 
                    placeholder="Filter by name"
                    type='text' 
                    onChange={this.handleChange}
                    value={this.state.value}
                />
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { filter } = state;

    return {
        filter 
    };
}

function mapDispatchToProps(dispatch) {
    return {  
        filter(name) {
            const filterItems = {
                type: 'FILTER',
                filter: {
                    name
                }
            };

            dispatch(filterItems);
        }

        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);