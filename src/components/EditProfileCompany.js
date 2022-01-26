import { useContext, useState } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import ProjectContext from "../utils/ProjectContext"

function EditProfileCompany(props) {
  const { show, setShow, companyId } = props
  const { editProfileCompany, profileCompany } = useContext(ProjectContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form className="mt-5" onSubmit={e => editProfileCompany(e, profileCompany?._id)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                aboutUs
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="aboutUs" defaultValue={profileCompany.aboutUs} />
              </Col>
              <Form.Label column md="3">
                companyName
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="companyName" defaultValue={profileCompany.companyName} />
              </Col>
              <Form.Label column md="3">
                logo
              </Form.Label>
              <Col md="8">
                <Form.Control type="url" name="logo" defaultValue={profileCompany.logo} />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="success" type="submit" onClick={() => setShow(false)}>
              Confirm Edit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default EditProfileCompany
