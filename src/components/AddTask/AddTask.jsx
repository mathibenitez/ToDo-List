import { Plus } from 'akar-icons'
import React from 'react'
import style from './AddTask.module.css'

export const AddTask = () => {
  return (
    <div>
      <button className={style.btn_task}>
        <Plus strokeWidth={2} size={36} />
      </button>
    </div>
  )
}
