
import TaskCard from "./TaskCard"
function App() {
  

  return (
    <div style={{display:"flex", margin:"5px",width:'100%'}}>
      <div style={{margin:"15px",width:'50%'}}>
      <h1 style={{marginBottom:'10px',fontSize:'35px',fontWeight:'bold'}}>Pending</h1>
      <div>
      <TaskCard title="Build your static App" date="10th April" assignee="Rahul M" cat="pending" />
      <TaskCard title="Add a Blog" date="22nd March" assignee="Rohith M" cat="pending" />
      </div>
      </div>
      <div style={{margin:"15px",width:'50%'}}>
      <h1 style={{marginBottom:'10px',fontSize:'35px',fontWeight:'bold'}}>Done</h1>
      <div>
      <TaskCard title="Design the mockup" date="10th April" assignee="Rahul M" cat="done"/>
      <TaskCard title="Get the approval from principal" date="20th April" assignee="Ajay s" cat="done" />
      </div>
      </div>
    </div>
    )
}

export default App
