import React from 'react'
import { Task } from '../Task/Task'
import style from './Grid.module.css'

export const Grid = ({ tasks }) => {
  return (
    <div className={style.list_task}>
      <ul className={style.ul_tasks}>
        {tasks.map(({ id, task, isCompleted }) => (
          <li key={id}>
            <Task id={id} name={task} isCompleted={isCompleted}></Task>
          </li>
        ))}
      </ul>
    </div>
  )
}
