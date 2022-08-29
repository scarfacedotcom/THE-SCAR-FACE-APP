import { useState } from 'react'

//styles
import './Create.css'


export default function Create() {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])

  return (
    <div className='create-form'>
      <h2 className="page-title">Create a New Project</h2>
      <form>
        <label>
          <span>Project Name:</span>
          <input 
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </label>
        <label>
          <span>Project Details:</span>
          <input 
            required
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)} 
          />
        </label>
        <label>
          <span>Due Date:</span>
          <input 
            required
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)} 
          />
        </label>
      </form>
    </div>
  )
}
