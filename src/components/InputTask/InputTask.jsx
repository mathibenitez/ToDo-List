import React from 'react'

export const InputTask = ({ task, setTask }) => {
  return (
    <div>
      <input
        value={task.value}
        onChange={e => setTask(e.target.value)}
        type="text"
        placeholder="task example..."
      />
    </div>
  )
}
