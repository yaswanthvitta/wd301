import "./TaskCard.css";

interface TaskProp {
    id:number;
    title: string;
    description:string;
    dueDate:string;
    deleteTask:(id:number)=>void;
  }

  const Task = (props: TaskProp) => {
    const deleteTask = () => {
         props.deleteTask(props.id)
   }
    return (
      <div style={{display:"flex"}}>
      <div className="TaskItem shadow-md border border-slate-100" style={{width:"60%"}}>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
        <p className="text-sm text-slate-500">{props.dueDate}</p>
        <p className="text-sm text-slate-500">Description: {props.description}</p>
      </div>
      <div style={{textAlign:"center",width:"40%",display:"flex",marginTop:"12px",flexDirection:"column",justifyContent:"center"}}>
        <div style={{width:"100%",textAlign:"center",height:"50px",display:"flex",justifyContent:"center"}}>
        <button onClick={deleteTask} id="deleteTaskButton" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{height:"40px",textAlign:"center",width:"100px"}}>delete</button>
        </div>
      </div>
      </div>

    );
  };

export default Task;