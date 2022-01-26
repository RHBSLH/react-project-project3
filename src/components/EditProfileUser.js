import { useContext, useState } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import ProjectContext from "../utils/ProjectContext"

function EditProfileUser(props) {
  const { show, setShow } = props
  const { editProfileUser, profileUsers } = useContext(ProjectContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form className="mt-5" onSubmit={e => editProfileUser(e, profileUsers?._id)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                UserName
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="userName" defaultValue={profileUsers.userName} />
              </Col>
              <Form.Label column md="3">
                avatar
              </Form.Label>
              <Col md="8">
                <Form.Control type="url" name="avatar" defaultValue={profileUsers.avatar} />
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

export default EditProfileUser
