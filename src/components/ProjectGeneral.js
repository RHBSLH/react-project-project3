
import "./ProjectGeneral.css"

function ProjectGeneral(props) {
  const { project } = props

  return (
    <div class="all3">
      <div class="card-container">
        <div class="card">
          <div class="front">
            <div class="cover"></div>
            <div class="user">
              <img class="img-circle" src={project.image} />
            </div>
            <div class="content">
              <div class="main">
                <h3 class="name">{project.title}</h3>
                <p class="profession">{project.date}</p>
              </div>
              <div class="footer">
                <div class="rating">
                  <i class="fa fa-mail-forward"></i>
                  {project.field}
                </div>
              </div>
            </div>
          </div>
          <div class="back">
            <div class="header"></div>
            <div class="content">
              <div class="main">
                <h4 class="text-center"> Description</h4>
                <p class="text-center">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectGeneral
