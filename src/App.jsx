import { useState } from 'react'
import { AddTask } from './components/AddTask/AddTask'
import { InputTask } from './components/InputTask/InputTask'

function App() {
  const [task, setTask] = useState([])

  return (
    <>
      <div>
        <h1>Task list</h1>
        <InputTask></InputTask>
        <AddTask onClick={() => setTask()}></AddTask>
      </div>
    </>
  )
}

export default App
