import React, { createContext, useState } from 'react'
import { Grid } from '../Grid/Grid'
import { TaskForm } from '../TaskForm/TaskForm'

export const TaskProvider = createContext({ error: 'Not access provider' })

export const TodoWrapper = () => {
  const [tasks, setTasks] = useState([])
  // const [currentDiv, setCurrentDiv] = useState(null)

  const onAddTask = todoTask => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(), // uuidv4(),
        task: todoTask,
        error: undefined
      }
    ])
  }

  const onEditTask = (id, name) => {
    setTasks(lastValues =>
      lastValues.map(task => (task.id === id ? { ...task, task: name } : task))
    )
  }

  const onDeleteTask = id => {
    setTasks(lastValues => lastValues.filter(task => task.id !== id))
  }

  return (
    <div>
      <h1>Task list</h1>
      <TaskForm addTask={onAddTask}></TaskForm>
      <TaskProvider.Provider value={{ onDeleteTask, onEditTask }}>
        <Grid tasks={tasks}></Grid>
      </TaskProvider.Provider>
    </div>
  )
}
