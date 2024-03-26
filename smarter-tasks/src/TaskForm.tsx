import React from "react";

interface TaskItem{
  title:string;
  description:string;
  duedate:string;
}

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}

interface TaskFormState {
    title: string;
    description:string;
    duedate:string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
          title: "",
          description:"",
          duedate:""
        }
      }


  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  desChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };

  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ duedate: event.target.value });
  };

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description:this.state.description,
      duedate:this.state.duedate,
    };
    this.props.addTask(newTask);
    this.setState({ title: "",description:"",duedate:"" });
  };

  
  render(){
    return (
      <form onSubmit={this.addTask}>
        <input type="text" value={this.state.title} onChange={this.titleChanged} id="todoTitle" className="border border-black-500 rounded-xl p-2 m-3" required/>
        <br/>
        <input type="text" value={this.state.description} onChange={this.desChanged} id="todoDescription" className="border border-black-500 rounded-xl p-2 m-3" required/>
        <br/>
        <input type="date" value={this.state.duedate} onChange={this.dateChanged} id="todoDueDate" className="border border-black-500 rounded-xl p-2 m-3" required/>
        <br/>
        <button type="submit" id="addTaskButton" className="border border-black-500 rounded-xl p-2 m-3">Add item</button>
      </form>
    )
  }
}
 export default TaskForm;