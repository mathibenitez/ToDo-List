import { Pencil, TrashCan } from 'akar-icons'
import React, { useContext, useState } from 'react'
import { TaskProvider } from '../TodoWrapper/TodoWrapper'

export const Task = ({ id, name }) => {
  const { onDeleteTask, onEditTask } = useContext(TaskProvider)
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(name)

  const handleSubmit = e => {
    e.preventDefault()

    onEditTask(id, value)
    setIsEditing(false)
  }

  return (
    <div key={id}>
      {!isEditing ? (
        <div>
          <span>{name}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input value={value} onChange={e => setValue(e.target.value)} />
          <button type="submit">Edit</button>
        </form>
      )}

      <div>
        <button onClick={() => setIsEditing(lastvalue => !lastvalue)}>
          <Pencil strokeWidth={2}></Pencil>
        </button>
        <button onClick={() => onDeleteTask(id)}>
          <TrashCan strokeWidth={2}></TrashCan>
        </button>
      </div>
    </div>
  )
}
