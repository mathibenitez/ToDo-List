import React from 'react'
import { Task } from '../Task/Task'

export const Grid = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map(({ id, task }) => (
          <Task key={id} name={task}></Task>
        ))}
      </ul>
    </div>
  )
}
