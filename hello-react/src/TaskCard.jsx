import './TaskCard.css'

const TaskCard = (props) => {
  const {title,cat,date,assignee} = props;

   const Dates = ({cat}) =>{

    if(cat == 'pending'){
      return <p className='Date'>Due on: {date}</p>
      }
      else{
        return <p>Compleated on: {date}</p>
      }

  }
  return (
    <div className="TaskItem">
      <h2 className='Title'>{title}</h2>
      <Dates cat={cat} />
      <p className='Assignee'>Assignee: {assignee}</p>
    </div>
  )
}

export default TaskCard