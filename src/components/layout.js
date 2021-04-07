import React from "react"
import "./layout.css"
import { Nav, Navbar } from "react-bootstrap"

export default function Layout({ children }) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Gatsby Video Gallery</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">contact</Nav.Link>
                </Nav>
            </Navbar>

            {children}
        </>
    )
}