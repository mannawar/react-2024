const Task = (props) => {
  const taskStyle = {
    textDecoration: props.completed? 'line-through': 'none',
    color: props.completed? 'green': 'black'
  }
    return (
        <div className="task" style={taskStyle}>
          <h1>{props.taskName}</h1>
          <button onClick={() => props.completeTask(props.id)}>Complete</button>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
      )
}

export default Task;