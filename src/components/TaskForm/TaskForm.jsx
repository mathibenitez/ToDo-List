import React from 'react'
import { useEffect, useState } from 'react'
import { AddTask } from '../Button/Button'

export const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    addTask(value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="task example..."
          value={value.value}
          onChange={e => setValue(e.target.value)}
        ></input>
        <button type="submit">Add task</button>

        {/* <AddTask onClick={handleSubmit}></AddTask> */}
      </form>
    </div>
  )
}
