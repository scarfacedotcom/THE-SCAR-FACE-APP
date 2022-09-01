import Avatar from "../../components/Avatar"


export default function ProjectSummary({ project }) {

  return (
    <>
      <div className="project-summary">
        <h1 className="page-title">{project.name}</h1>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">
          Project  Details:
          {project.details}
        </p>
        <h4>Project assigned to:</h4>
          <div className="assigned-users">
            {project.assignedUsersList.map(user => (
              <div key={user.id}>
                <Avatar src={user.photoURL} />
              </div>
            ))}  
          </div>
      </div>
    </>
  )
}
