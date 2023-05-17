import React, { useState } from 'react'
import { TaskForm } from '../TaskForm/TaskForm'
import { Grid } from '../Grid/Grid'

export const TodoWrapper = () => {
  const [tasks, setTasks] = useState([])
  // const [currentDiv, setCurrentDiv] = useState(null)

  const onAddTask = todoTask => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(), // uuidv4(),
        task: todoTask,
        isEditing: false
      }
    ])
  }

  const onEditTask = todoTask => {
    setTasks({
      id: todoTask.id,
      name: todoTask.value
    })
    // setCurrentDiv(taskRef)
  }

  return (
    <div>
      <h1>Task list</h1>
      <TaskForm addTask={onAddTask}></TaskForm>
      <Grid tasks={tasks}></Grid>
    </div>
  )
}
