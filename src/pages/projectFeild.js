import { useContext } from "react"
import { Row } from "react-bootstrap"
import ProjectGeneral from "../components/ProjectGeneral"
import ProjectContext from "../utils/ProjectContext"
import { useParams } from "react-router-dom"

function ProjectFeild() {
  const { projects } = useContext(ProjectContext)
  const { feildName } = useParams()
  const projectFeild = projects.filter(project => project.field == feildName)
  

  return (
    <>
      <Row>
        <h4 className="mt-5 mb-4">ProjectFeild </h4>
      </Row>
      <Row md={5}>
        {projectFeild.map(project => (
          <ProjectGeneral project={project} />
        ))}
      </Row>
    </>
  )
}

export default ProjectFeild
