import './TaskCard.css'
import React from 'react';

interface TaskCardprops {
  title: string;
  completedAtDate?: string;
  dueDate?:string;
  assigneeName:string;
}

const TaskCard :React.FC<TaskCardprops> = (props) => {
  const {title,completedAtDate,dueDate,assigneeName} = props;

   const Dates = ({cat,due}) =>{

    if(due !== undefined){
      return <p className='Date'>Due On: {dueDate}</p>
      }
      if(cat !== undefined){
        return <p>Compleated On: {completedAtDate}</p>
      }

  }
  return (
    <div className="TaskItem">
      <h2 className='Title'>{title}</h2>
      <Dates cat="completedAtDate" due="dueDate" />
      <p className='Assignee'>Assignee: {assigneeName}</p>
    </div>
  )
}

export default TaskCard