import React from 'react'

class CardList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        const { children } = this.props;
        return(
            <div>
                {
                    React.Children.map(children, (child) => <div>{child} </div>)
                }
            </div>
        )
    }
}

export default CardList;