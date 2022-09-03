import { useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
import { timestamp } from "../../firebase/config"
import { useFirestore } from "../../hooks/useFirestore"

export default function ProjectComments({project}) {
  const [newComment, setNewComment] = useState('')
  const {user} = useAuthContext()
  const { updateDocument, response } = useFirestore('projects')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random()
    }
      await updateDocument(project.id, {
        comments: [...project.comments, commentToAdd]
      })
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
