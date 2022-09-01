import { useParams } from 'react-router-dom'
import{ useDocument } from '../../hooks/useDocument'

// styles
import './Project.css'

export default function Project() {
  const { id } = useParams()

  if(error) {
    return <div className="error">{error}</div>
  }

  if (!document) {
    return <div className="loading">loading...</div>
  }

  return (
    <div className='project-details'>
      <h1>{document.name}</h1>
    </div>
  )
}
