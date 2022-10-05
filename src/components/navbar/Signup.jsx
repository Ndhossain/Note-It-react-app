import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Signup({ show, setShow, setLoginShow }) {
    return (
        <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header closeButton className="border-0">
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter your full name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I agree to all terms & conditions" />
                    </Form.Group>

                    <Button variant="primary" className="w-100" type="submit">
                        Sign Up
                    </Button>
                    <br />
                    <Form.Text className="text-muted mt-3 d-block">
                        Already have a account.{' '}
                        <Button
                            className="p-0 bg-transparent text-primary border-0"
                            onClick={() => {
                                setLoginShow(true);
                                setShow(false);
                            }}
                        >
                            Log in
                        </Button>{' '}
                        now.
                    </Form.Text>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default Signup;
