import { useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
import { timestamp } from "../../firebase/config"

export default function ProjectComments() {
  const [newComment, setNewComment] = useState('')
  const {user} = useAuthContext()
  const { timestamp } = timestamp()

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add New Comment:</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value) }
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
      
    </div>
  )
}
