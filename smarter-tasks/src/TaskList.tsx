import React from "react";
import Task from "./Task"
import { TaskItem } from "./types";


interface Props {
    tasks: TaskItem[];
  }
  
class TaskList extends React.Component<Props> {
       

    render() {
      return (
        <>
          {this.props.tasks.map((task,idx) => (
            <Task key={idx} title={task.title} description={task.description} duedate={task.duedate} />
          ))}
        </>
      );
    }
  }

export default TaskList;