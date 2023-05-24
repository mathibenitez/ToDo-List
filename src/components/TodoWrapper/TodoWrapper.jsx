import React, { createContext, useState } from 'react'
import { Grid } from '../Grid/Grid'
import { TaskForm } from '../TaskForm/TaskForm'
import style from './TodoWrapper.module.css'

export const TaskProvider = createContext({ error: 'Not access provider' })

export const TodoWrapper = () => {
  const [tasks, setTasks] = useState([])
  console.log('sexo tantrico animal')
  // const [currentDiv, setCurrentDiv] = useState(null)

  const onAddTask = todoTask => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(), // uuidv4(),
        task: todoTask,
        error: undefined,
        isCompleted: false
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

  const onToggleComplete = id => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? {
              ...task,
              isCompleted: !task.isCompleted
            }
          : task
      )
    )
  }

  return (
    <div className={style.wrapper}>
      <h1 className={style.tittle}>Task list</h1>
      <div className={style.content}>
        <TaskForm addTask={onAddTask}></TaskForm>
        <TaskProvider.Provider
          value={{ onDeleteTask, onEditTask, onToggleComplete }}
        >
          <Grid tasks={tasks}></Grid>
        </TaskProvider.Provider>
      </div>
    </div>
  )
}
