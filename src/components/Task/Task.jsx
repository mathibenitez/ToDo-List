import { Pencil, TrashCan } from 'akar-icons'
import React, { useRef } from 'react'
import { IconButton } from '../IconButton/IconButton'

export const Task = ({ id, name, onDelete, onEdit }) => {
  const taskRef = useRef()

  return (
    <div key={id} ref={taskRef}>
      <div>
        <span>{name}</span>
      </div>
      <IconButton
        onClick={() => {
          onEdit({ id: id, name: name })
        }}
      >
        <Pencil strokeWidth={2}></Pencil>
        <TrashCan strokeWidth={2}></TrashCan>
      </IconButton>
    </div>
  )
}
