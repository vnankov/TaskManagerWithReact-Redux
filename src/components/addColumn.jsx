import React from "react";
import Popup from "reactjs-popup";

class AddColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        open: false,
        todoName : '', 
        errorMessage : 'none'
    };

    this.addColumn = this.addColumn.bind(this);
    this.onChange = this.onChange.bind(this);
  }
    openModal = () => {
        this.setState({ open: true });
    };

    closeModal = () => {
        this.setState({ open: false, todoName : '' ,errorMessage : 'none'  });
    };

    addColumn(ev){
        ev.preventDefault();
        if(this.state.todoName.length > 2 &&
           this.state.todoName.length < 100 &&
            (this.state.todoName.charCodeAt(0) < 48 || 
             this.state.todoName.charCodeAt(0) > 57
            ) 
         ){
            this.props.createColumn(this.state.todoName)
            this.setState({todoName : '', open : false, errorMessage : 'none'})
        }
        else{
            this.setState({errorMessage : 'error-message-column'})
        }
    }
    onChange({target}){
        this.setState({ todoName : target.value})
    }

  render() {
    return (
      <div>
        <button className="add-card" onClick={this.openModal}>
            <h3>+ Add Column</h3>
        </button>   
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
          on="focus"
        >
            <div className="modal">
                <p>Add a <span>column</span></p>
                <p className={this.state.errorMessage}>* Column length must be between 2 and 100 characters</p>
                <p className={this.state.errorMessage}>* Column name must NOT start with number</p>
                <form>
                    <input 
                        className="add-column"
                        type='text' 
                        onChange={this.onChange} 
                        value={this.state.todoName}
                    />
                    <div className="add-column-buttons">
                        <button className="add-single-card" onClick={this.addColumn}>
                                <h3>Add</h3>
                        </button> 
                        <button className="cancel-single-card" onClick={this.closeModal}>
                                <h3>Cancel</h3>
                        </button>
                    </div>
                </form>
            </div>
        </Popup>
      </div>
    );
  }
}

export default AddColumn;