import React from 'react'
import styled from 'styled-components'

const Container  = styled.div `
    font-size: 20px;
    background: #0F0E17;
`

const Button = styled.button `
    background: #FF8906;
    color: white;
    font-size: 20px;

`

const Navbar = () => {
    return (
        <Container className="container-fluid p-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-trasparent px-4">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active text-white" aria-current="page" href="#">Hola</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#proyectos">Proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#testimonios" tabindex="-1">Testimonios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#contacto" tabindex="-1">Contacto</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Button className="btn" type="button">Descargar Currículum</Button>
                        </form>
                    </div>
                </div>
            </nav>
        </Container>
    )
}

export default Navbar
