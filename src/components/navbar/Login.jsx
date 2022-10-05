import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Login({ show, setShow, setSignupShow }) {
    return (
        <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header closeButton className="border-0">
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" className="w-100" type="submit">
                        Log In
                    </Button>
                    <br />
                    <Form.Text className="text-muted mt-3 d-block">
                        Don&apos;t have a account.{' '}
                        <Button
                            className="p-0 bg-transparent text-primary border-0"
                            onClick={() => {
                                setSignupShow(true);
                                setShow(false);
                            }}
                        >
                            Sign up
                        </Button>{' '}
                        now.
                    </Form.Text>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default Login;
