function ProjectOffer(props) {
  const { project } = props
  if (!project) return null
  return (
    <>
      <h1>{project.title}</h1>
    </>
  )
}

export default ProjectOffer
