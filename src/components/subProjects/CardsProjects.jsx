import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Overlay = styled.div`
    position: relative;
    .content {
        color: white;
        position: absolute;
        opacity: 0;
        background: #0F0E17;
        top: 29%;
        left: -25px;
        width: 430px;
        padding: 10px;
    }
    img {
        width: 633px;
        height: 448px;
    }
    .social {
        display: flex;
        flex-direction: column;
        position: absolute;
        font-size: 55px;
        top: 30%;
        right: 5%;
        opacity: 0;
        
    }
    @media (max-width: 700px) {
        padding-bottom: 15px;
        img {
            width: 100%;
            height: 100%;
        }
        .content {
            color: white;
            font-size: 12px;
            position: absolute;
            opacity: 1;
            top: 15%;
            left: -8px;
            width: 215px;
            padding: 10px;
        }
        .social{
            font-size: 35px;
            opacity: 1;
            top: 28%;
            right: 3%;
        }

    }
    &:hover {
        .content {
            opacity: 1;
        }
        .social{
            opacity: 1;
        }
        img{   
            -webkit-filter: blur(3px);
            filter: blur(3px);
        }
    }
`
const CardsProjects = () => {
    return (
        <>
            <div class="row ">
                <div class="col-sm-6 pb-3">
                    <div class="card">
                        <Overlay class="card-body rounded">
                            <img src="https://i.imgur.com/vUXxQYu.png" className="rounded" alt="" />
                            <Overlay className="content pt-4 pb-3" >
                                <h4>Appdoption</h4>
                                <p style={{color: "#A7A9BE"}} >¡Plataforma web que permite la adopcion de mascotas!, no hay mejor forma para encontrar un nuevo hogar y felicidad a tus mascotas.</p>
                            </Overlay>
                            <Overlay className="social" >
                                <div >
                                    <a href="https://j-roma.github.io/Sprint1-Adopcion/" style={{textDecoration: "none", color: '#FF8906'}} target="_blank">
                                        <FontAwesomeIcon className="p-1 bg-dark rounded rounded-circle" icon={faEye} />
                                    </a>
                                </div>
                                <div >
                                    <a href="https://github.com/J-Roma/Sprint1-Adopcion" style={{textDecoration: "none", color: '#FF8906'}} target="_blank">
                                        <FontAwesomeIcon className="p-1 bg-dark rounded rounded-circle" icon={faGithub} />
                                    </a>
                                </div>
                            </Overlay>
                        </Overlay>
                    </div>
                </div>
                <div class="col-sm-6 pb-3">
                    <div class="card">
                        <Overlay class="card-body rounded">
                            <img src="https://i.imgur.com/ZHQ80Hh.png" className="rounded" alt="" />
                            <Overlay className="content pt-4 pb-3" >
                                <h4>Principe Fresco</h4>
                                <p style={{color: "#A7A9BE"}} >E-commerce donde nos basamos en la aclamada serie "The Fresh Prince" y sus posibles productos en el mercado.</p>
                            </Overlay>
                            <Overlay className="social" >
                                <div >
                                    <a href="https://luischdu.github.io/EcomerceWorkshop/" style={{textDecoration: "none", color: '#FF8906'}} target="_blank">
                                        <FontAwesomeIcon className="p-1 bg-dark rounded rounded-circle" icon={faEye} />
                                    </a>
                                </div>
                                <div >
                                    <a href="https://github.com/luischdu/EcomerceWorkshop" style={{textDecoration: "none", color: '#FF8906'}} target="_blank">
                                        <FontAwesomeIcon className="p-1 bg-dark rounded rounded-circle" icon={faGithub} />
                                    </a>
                                </div>
                            </Overlay>
                        </Overlay>
                    </div>
                </div>
            </div>
            <div class="row justify-content-around">
                <div class="col-sm-6 pb-3">
                    <div class="card">
                        <Overlay class="card-body rounded">
                            <img src="https://i.imgur.com/JKeMKia.png" className="rounded" alt="" />
                            <Overlay className="content pt-4 pb-3" >
                                <h4>Guappjolotas</h4>
                                <p style={{color: "#A7A9BE"}} >Con Guappjolotas puedes iniciar tu día con la mejor energia ordenando tu guajalota, tamal o bebida favorita.</p>
                            </Overlay>
                            <Overlay className="social" >
                                <div >
                                    <a href="https://vigilant-bose-b9ad67.netlify.app" style={{textDecoration: "none", color: '#FF8906'}} target="_blank">
                                        <FontAwesomeIcon className="p-1 bg-dark rounded rounded-circle" icon={faEye} />
                                    </a>
                                </div>
                                <div >
                                    <a href="https://github.com/luischdu/SprintII" style={{textDecoration: "none", color: '#FF8906'}} target="_blank">
                                        <FontAwesomeIcon className="p-1 bg-dark rounded rounded-circle" icon={faGithub} />
                                    </a>
                                </div>
                            </Overlay>
                        </Overlay>
                    </div>
                </div>
                <div class="col-sm-6 pb-3">
                    <div class="card">
                        <Overlay class="card-body rounded">
                            <img src="https://i.imgur.com/RCNKV0Z.png" className="rounded" alt="" />
                            <Overlay className="content pt-4 pb-3" >
                                <h4>Block Master</h4>
                                <p style={{color: "#A7A9BE"}} >¡Poderosa plataforma de peliculas en donde encontraras gran variedad de contenido para disfrutar con tu familia y amigos!.</p>
                            </Overlay>
                            <Overlay className="social" >
                                <div >
                                    <a href="https://j-roma.github.io/block-master/" style={{textDecoration: "none", color: '#FF8906'}} target="_blank">
                                        <FontAwesomeIcon className="p-1 bg-dark rounded rounded-circle" icon={faEye} />
                                    </a>
                                </div>
                                <div >
                                    <a href="https://j-roma.github.io/block-master/" style={{textDecoration: "none", color: '#FF8906'}} target="_blank">
                                        <FontAwesomeIcon className="p-1 bg-dark rounded rounded-circle" icon={faGithub} />
                                    </a>
                                </div>
                            </Overlay>
                        </Overlay>
                    </div>
                </div>
                <div class="col-sm-6 pb-3">
                    <div class="card">
                        <Overlay class="card-body rounded">
                            <img src="https://i.imgur.com/fz2Cs3N.png" className="rounded" alt="" />
                            <Overlay className="content pt-4 pb-3" >
                                <h4>Block Master</h4>
                                <p style={{color: "#A7A9BE"}} >¡Poderosa plataforma de peliculas en donde encontraras gran variedad de contenido para disfrutar con tu familia y amigos!.</p>
                            </Overlay>
                            <Overlay className="social" >
                                <div >
                                    <a href="https://github.com/luischdu/legion-geek" style={{textDecoration: "none", color: '#FF8906'}} target="_blank">
                                        <FontAwesomeIcon className="p-1 bg-dark rounded rounded-circle" icon={faEye} />
                                    </a>
                                </div>
                                <div >
                                    <a href="https://github.com/luischdu/legion-geek" style={{textDecoration: "none", color: '#FF8906'}} target="_blank">
                                        <FontAwesomeIcon className="p-1 bg-dark rounded rounded-circle" icon={faGithub} />
                                    </a>
                                </div>
                            </Overlay>
                        </Overlay>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardsProjects
