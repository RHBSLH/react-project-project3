import { useContext, useState } from "react"
import ProjectContext from "../utils/ProjectContext"
import ProjectEditUserModal from "./ProjectEditUserModal"
import "./UserProject.css"
import { AiFillEdit } from "react-icons/ai"
import { MdLocalOffer } from "react-icons/md"

function UserProject(props) {
  const { project } = props
  const { makeOffers } = useContext(ProjectContext)
  const [editShow, setEditShow] = useState(false)
  if (!project) return null

  return (
    <>
      <figure class="snip1321">
        <img src={project.image} />
        <figcaption>
          <i>
            {" "}
            {localStorage.tokenCompany ? (
              <button onClick={e => makeOffers(project._id)}>
                <MdLocalOffer />
              </button>
            ) : (
              <>
                <button class="btnnnn" variant="" onClick={() => setEditShow(true)}>
                  <AiFillEdit />
                </button>
              </>
            )}
            <ProjectEditUserModal show={editShow} setShow={setEditShow} project={project} />
          </i>
          <h4>{project.title} </h4>
          ------------------------
          <h6>{project.date}</h6>
          <p>{project.description}</p>
          <br />
          <h6> {project.demoLink}</h6>
          <h6> {project.gitHubLink}</h6>
        </figcaption>
      </figure>
    </>
  )
}

export default UserProject
