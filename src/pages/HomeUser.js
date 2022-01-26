import Video from "../components/Video"
import Com from "../components/Com"
import NavbarItem from "../components/Navbar"
import { useContext, useState } from "react"
import ProjectContext from "../utils/ProjectContext"
import ProjectGeneral from "../components/ProjectGeneral"
import {  Row } from "react-bootstrap"
import UserProject from "../components/UserProject"
import "./Home.css"
import {BiAddToQueue} from "react-icons/bi";
import ProjectAddUserModal from "../components/ProjectAddUserModal"


function HomeUser() {
  const { projects, profileUsers } = useContext(ProjectContext)
  const [show, setShow] = useState(false)
  const userProjects = projects.filter(project => project.owner == profileUsers?._id)
  console.log(userProjects)

  
  return (
    <>
      <NavbarItem />
      <Video />
      <Com /> 
      <Row>
        <h4 clasS="h44">  General project </h4>
      </Row>
      <Row md={5}>
        {projects.map(project =>
            project.type === "General" ? <ProjectGeneral key={project._id} project={project} /> : null
          
        )}
      </Row>
      {localStorage.tokenUser ? (
        <>
          <Row>
            <h4 class="h44" > YOUR PROJECTS </h4>
          </Row>
          <Row md={5}>
            {userProjects.map(project =>
              project.type === "User" ? <UserProject key={project._id} project={project} /> : null
            )}
          </Row>
          <Row>
            <h4 class="h44">can add your project  <button  onClick={() => setShow(true)} variant=""><BiAddToQueue/></button></h4>
           
           
          </Row>
          <ProjectAddUserModal show={show} setShow={setShow} />
        </>
      ) : null}
    </>
  )
}

export default HomeUser
