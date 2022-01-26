import Video from "../components/Video"
import Com from "../components/Com"
import NavbarItem from "../components/Navbar"
import { useContext, useState } from "react"
import ProjectContext from "../utils/ProjectContext"
import { Row } from "react-bootstrap"
import UserProject from "../components/UserProject"
import CompanyProject from "../components/CompanyProject"
import "./Home.css"
import ProjectAddCompanyModal from "../components/ProjectAddCompanyModal"
import { BiAddToQueue } from "react-icons/bi"
import { Link } from "react-router-dom"

function HomeCompany() {
  const { projects, profileCompany } = useContext(ProjectContext)
  const [show, setShow] = useState(false)
  const companyProjects = projects.filter(project => project.owner == profileCompany?._id)
  const otherCompanyProjects = projects.filter(project => project.owner !== profileCompany?._id)
  console.log(companyProjects)

  return (
    <>
      <NavbarItem />

      <Video />
      <Com />

      <Row>
        <h4 class="h44">project User</h4>
      </Row>
      <Row md={5}>{projects.map(project => (project.type === "User" ? <UserProject project={project} /> : null))}</Row>
      <Row>
        <h4 class="h44">project another Company</h4>
      </Row>
      <Row md={5}>
        {otherCompanyProjects.map(project =>
          project.type === "Company" ? <CompanyProject project={project} /> : null
        )}
      </Row>
      {localStorage.tokenCompany ? (
        <>
          <Row>
            <h4 class="h44"> YOUR PROJECTS </h4>
          </Row>
          <Row md={5}>
            {companyProjects.map(project =>
              project.type === "Company" ? <CompanyProject key={project._id} project={project} /> : null
            )}
          </Row>
          <Row>
            <h1 class="h44">
              can add your project{" "}
              <button onClick={() => setShow(true)} variant="">
                <BiAddToQueue />
              </button>{" "}
            </h1>
          </Row>
          <ProjectAddCompanyModal show={show} setShow={setShow} />
        </>
      ) : null}
      <div class="feild">
        <h4 class="h444">Project Feild</h4>
        <div class="all5">
          <Link class="link4" to="/feild/Education">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Education
          </Link>
          <Link class="link4" to="/feild/Commercial">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Commercial
          </Link>
          <Link class="link4" to="/feild/Industry">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Industry
          </Link>
          <Link class="link4" to="/feild/Healthy">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Healthy
          </Link>
          <Link class="link4" to="/feild/Entertainment">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Entertainment
          </Link>
          <Link class="link4" to="/feild/culture">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            culture
          </Link>
        </div>
      </div>
    </>
  )
}

export default HomeCompany
