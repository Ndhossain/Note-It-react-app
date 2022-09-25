import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import Signup from './Signup';

function Header() {
    const [loginShow, setLoginShow] = useState(false);
    const [signupShow, setSignupShow] = useState(false);

    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Note-It</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="me-2">
                            <Button variant="primary" onClick={() => setLoginShow(true)}>
                                Log In
                            </Button>
                            <Login
                                show={loginShow}
                                setShow={setLoginShow}
                                setSignupShow={setSignupShow}
                            />
                        </Navbar.Text>
                        <Navbar.Text>
                            <Button variant="primary" onClick={() => setSignupShow(true)}>
                                Sign Up
                            </Button>
                            <Signup
                                show={signupShow}
                                setShow={setSignupShow}
                                setLoginShow={setLoginShow}
                            />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
