import React from "react";
import Popup from "reactjs-popup";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        open: false,
        taskName : '', 
        creator : '',
        deadline : '',
        selectedOption : "important",
        details : ''
    };

    this.addTask = this.addTask.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeCreator = this.onChangeCreator.bind(this);
    this.onChangeDeadline = this.onChangeDeadline.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleDetailsChange = this.handleDetailsChange.bind(this);
  }
    openModal = () => {
        this.setState({ open: true });
    };

    closeModal = () => {
        this.setState({ 
            open: false,
            taskName : '',
            creator : '',
            deadline : '',
            selectedOption : "important",
            details : ''
        });
    };

    addTask(ev){
        ev.preventDefault();
        if(this.state.taskName !== '' && this.state.creator !== ''){
            this.props.createTask(
                this.state.taskName, 
                this.state.creator,
                this.state.deadline,
                this.state.selectedOption,
                this.state.details
             )
            this.setState({taskName : '', open : false})
        }
    }
    onChange({target}){
        this.setState({ taskName : target.value})
    }
    onChangeCreator({target}){
        this.setState({ creator : target.value})
    }
    onChangeDeadline({target}){
        this.setState({ deadline : target.value})
    }
    handleOptionChange({target}){
        this.setState({ selectedOption: target.value});
    }
    handleDetailsChange({target}){
        this.setState({ details: target.value});
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
                        <p>Add a task <span>name</span></p>
                        <input 
                            className="add-column"
                            type='text' 
                            onChange={this.onChange} 
                            value={this.state.taskName}
                        />
                        <p>Add a <span>deadline</span></p>
                        <input 
                            className="add-column"
                            type='text' 
                            onChange={this.onChangeDeadline} 
                            value={this.state.deadline}
                        />
                        <p>Set status of priority</p>

                        <div className="radio-buttons">
                            <label>Critical</label>
                            <input 
                                type="radio"
                                value="critical" 
                                checked={this.state.selectedOption === 'critical'} 
                                onChange={this.handleOptionChange} 
                            />
                            <label>/ Important </label>
                            <input type="radio"
                                value="important" 
                                checked={this.state.selectedOption === 'important'} 
                                onChange={this.handleOptionChange} 
                            />
                            <label>/ Not-Important </label>
                            <input type="radio"
                                value="not-important" 
                                checked={this.state.selectedOption === 'not-important'} 
                                onChange={this.handleOptionChange} 
                            />
                        </div>

                        <input 
                            className="textarea" 
                            type="textarea" 
                            placeholder="Place further description"
                            onChange={this.handleDetailsChange}
                            />
                        
                        <p>Enter creator of <span>task</span></p>
                        <input 
                            className="add-column"
                            type='text' 
                            onChange={this.onChangeCreator} 
                            value={this.state.creator}
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