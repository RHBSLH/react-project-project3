import { useContext } from "react"
import ProjectContext from "../utils/ProjectContext"
import { Row } from "react-bootstrap"
import UserProject from "../components/UserProject"
import CompanyProject from "../components/CompanyProject"

function Project() {
  const { projects } = useContext(ProjectContext)
  return (
    <>
      <Row>
        <h4 className="mt-5 mb-4">project </h4>
      </Row>
      <Row md={5}>
        {projects.map(project =>
          project.type === "User" ? (
            <UserProject project={project} />
          ) : (
            (project.type = "Company" ? <CompanyProject project={project} /> : "null")
          )
        )}
      </Row>
    </>
  )
}

export default Project
