import { Pencil, TrashCan } from 'akar-icons'
import React, { useContext, useState } from 'react'
import { TaskProvider } from '../TodoWrapper/TodoWrapper'

export const Task = ({ id, name }) => {
  const { onDeleteTask, onEditTask } = useContext(TaskProvider)
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    const nameEdited = e.target.editInput.value

    onEditTask(id, nameEdited)
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
          <input defaultValue={name} name="editInput" />
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
