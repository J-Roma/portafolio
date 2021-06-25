import React from 'react'
import CardsProjects from './subProjects/CardsProjects'

const Projects = () => {
    return (
        <div className="container py-5" id="proyectos">
            <div className="row py-5">
                <div className="col-md-6">
                    <h1>¡Hechos con amor y esfuerzo!</h1>
                </div>
                <div className="col-md-6" style={{fontSize: '24px'}}>
                    <p>Algunos de los proyectos que he realizado y he participado, durante mi formacion como desarrollador Fron-End.</p>
                </div>
            </div>
            <CardsProjects/>
            <div className="row pt-4 text-center">
                <div className="col-md-12">
                    <a href="https://github.com/J-Roma" target="_blank">
                        <button className="btn btn-outline-dark px-5 py-3 text-center"> Ver mas proyectos... </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects
