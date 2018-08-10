import React from "react";
import Popup from "reactjs-popup";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        open: false,
        taskName : '', 
    };

    this.addTask = this.addTask.bind(this);
    this.onChange = this.onChange.bind(this);
  }
    openModal = () => {
        this.setState({ open: true });
    };

    closeModal = () => {
        this.setState({ open: false, taskName : '' });
    };

    addTask(ev){
        ev.preventDefault();
        if(this.state.taskName !== ''){
            this.props.createTask(this.state.taskName)
            this.setState({taskName : '', open : false})
        }
    }
    onChange({target}){
        this.setState({ taskName : target.value})
    }

  render() {
    return (
      <div >
      
        <button className="add-task" onClick={this.openModal}>
            <h3>+</h3>
        </button>   
        <form>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
          on="focus"
        >
            <div className="modal">
                <p>Add a task</p>
                    <input 
                        className="add-column"
                        type='text' 
                        onChange={this.onChange} 
                        value={this.state.taskName}
                    />
                    <div className="add-column-buttons">
                        <button className="add-single-card" onClick={this.addTask}>
                                <h3>Add</h3>
                        </button> 
                        <button className="cancel-single-card"  onClick={this.closeModal}>
                                <h3>Cancel</h3>
                        </button>
                    </div>
            </div>
        </Popup>
        </form>
      </div>
      
    );
  }
}

export default AddTask;