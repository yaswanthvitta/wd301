import Task from "./Task"
import { TaskItem } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";
interface TaskAppState {
  tasks: TaskItem[];
}

interface Props {
    tasks: TaskItem[];
  }
  
  const TaskList = (props: Props) => {
    
    const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks", {
      tasks: [],
    });
    const deleteTask=(id:string)=>{
      console.log(taskAppState)
      props.tasks.forEach((_item, index) => {
        if (_item.id === id) {
          props.tasks.splice(index, 1);
        }
        setTaskAppState({ tasks: props.tasks });
    });
  

    }
    const list = props.tasks.map((task, idx) => (
      <li key={idx}>
      <Task
        key={idx}
        id={task.id}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        deleteTask={deleteTask}
      />
      </li>
    ));
    return (
      <ul>
      {list}
      </ul>
    );
    
  };

export default TaskList;