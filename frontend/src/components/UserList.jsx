import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Deleteuser, Editusers, Getusers } from "../Action";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const UserList = (user) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name,setname]=useState('')
  const [age,setage]=useState('')
  const [heigth,setheigth]=useState('')
  const [weigth,setweigth]=useState('')
  const [image,setimage]=useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit=()=>{
    dispatch(Editusers({name,age,heigth,weigth},user._id));
    handleClose();
  }
    useEffect(() => {
    dispatch(Getusers()); //remplir the empty state from reducer using Getusers function
  }, []);
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      {users.map((e) => (
        <Card key={e._id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={e.image} />
          <Card.Body>
            <Card.Title>{e.name}</Card.Title>
            <Card.Text>
              Age: {e.age}
              <br />
              Heigth: {e.heigth}
              <br />
              Weigth: {e.weigth}
            </Card.Text>
            <Button
              variant="danger"
              onClick={() => dispatch(Deleteuser(e._id))}
            >
              Delete
            </Button>
            <div>
              <Button variant="primary" onClick={handleShow}>
                Edit
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                      onChange={(e) => setname(e.target.value)}
                        type="text"
                        placeholder="name"
                        autoFocus
                        defaultValue={e.name}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                      onChange={(e) => setage(e.target.value)}
                        type="email"
                        placeholder="age"
                        autoFocus
                        defaultValue={e.age}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Heigth</Form.Label>
                      <Form.Control
                      onChange={(e) => setheigth(e.target.value)}
                        type="email"
                        placeholder="heigth"
                        autoFocus
                        defaultValue={e.heigth}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Weigth</Form.Label>
                      <Form.Control
                      onChange={(e) => setweigth(e.target.value)}
                        type="email"
                        placeholder="weigth"
                        autoFocus
                        defaultValue={e.weigth}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Image</Form.Label>
                      <Form.Control
                      onChange={(e) => setimage(e.target.value)}
                        type="text"
                        placeholder="image"
                        autoFocus
                        defaultValue={user.image}
                        id="imageInput"
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleEdit}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
