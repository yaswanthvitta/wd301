
import TaskCard from "./TaskCard"
import React from 'react';
function App() {
  

  return (
    <div style={{display:"flex", margin:"5px",width:'100%'}}>
      <div style={{margin:"15px",width:'50%'}}>
      <h1 style={{marginBottom:'10px',fontSize:'35px',fontWeight:'bold'}}>Pending</h1>
      <div>
      <TaskCard title="Build your static App" dueDate="10th April" assigneeName="Rahul M"  />
      <TaskCard title="Add a Blog" dueDate="22nd March" assigneeName="Rohith M" />
      </div>
      </div>
      <div style={{margin:"15px",width:'50%'}}>
      <h1 style={{marginBottom:'10px',fontSize:'35px',fontWeight:'bold'}}>Done</h1>
      <div>
      <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rahul M" />
      <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay s"  />
      </div>
      </div>
    </div>
    )
}

export default App
