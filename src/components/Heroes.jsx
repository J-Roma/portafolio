import React from 'react'
import styled from 'styled-components'

const Container  = styled.div `
    font-size: 20px;
    background: #0F0E17;
    margin: 0 auto;
`


const Heroes = () => {
    return (
        <Container>
            <div className="container col-xxl-8 px-2 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5 justify-content-center">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://i.imgur.com/PTYIUzR.png" className="d-block mx-lg-auto img-fluid rounded rounded-circle" alt="profile" width="600" height="400" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-white" style={{ fontSize: "64px"}}>¡Hola a todos!<br/> Soy Jhosep Ropero</h1>
                        <p className="lead" style={{ fontSize: "24px", color: "#A7A9BE"}} >Ingeniero de Telecomunicaciones y Desarrollador Front-End en constante proyeccion personal, me hace feliz ver peliculas, series y el anime, estoy encantado de presentarles mis proyectos!</p>
                        {/* <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Heroes
