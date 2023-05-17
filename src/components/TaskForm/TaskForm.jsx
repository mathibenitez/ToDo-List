import React, { useState } from 'react'

export const TaskForm = ({ addTask }) => {
  const [inputState, setInputState] = useState({
    value: '',
    error: false
  })

  const handleSubmit = e => {
    e.preventDefault()

    addTask(value)

    setValue('')
  }

  const onChangeHandle = (value, error)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="task example..."
          value={value}
          onChange={e => setValue(e.target.value)}
        ></input>
        <button type="submit">Add task</button>

        {/* <AddTask onClick={handleSubmit}></AddTask> */}
      </form>
    </div>
  )
}
