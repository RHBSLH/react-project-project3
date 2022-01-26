import { useContext, useState } from "react"
import ProjectContext from "../utils/ProjectContext"
import ProjectEditCompanyModal from "./ProjectEditCompanyModal"
import { AiFillEdit } from "react-icons/ai"
import { MdLocalOffer } from "react-icons/md"

function CompanyProject(props) {
  const { project } = props
  const { makeOffers, profileCompany } = useContext(ProjectContext)

  const [editShow, setEditShow] = useState(false)

  if (!project) return null
  return (
    <>
      <figure class="snip1321">
        <img src={project.image} />
        <figcaption>
          <i>
            {" "}
            {project.owner !== profileCompany?._id ? (
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
            <ProjectEditCompanyModal show={editShow} setShow={setEditShow} project={project} />{" "}
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

export default CompanyProject
