import React from 'react'
import { Task } from '../Task/Task'

export const Grid = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map(({ id, task, isCompleted }) => (
          <Task key={id} id={id} name={task} isCompleted={isCompleted}></Task>
        ))}
      </ul>
    </div>
  )
}
