import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

const Presentation = () => {
    return (
        <>
        <h3>Presentation</h3>
        <div className='carousel'>
            <Carousel autoPlay interval={3000} infiniteLoop={true} width={1000}>
                <div className="carousel">
                    <img src={require("../assets/img/cirque/2cirque.png")} />
                    <p className="legend">Venez nous rejoindre en Octobre !</p>
                </div>
                <div className="carousel">
                    <img src={require("../assets/img/cirque/pexels-sergio-souza-2039944.jpg")} />
                    <p className="legend">Un endroit unique</p>
                </div>
                <div className="carousel">
                    <img src={require("../assets/img/cirque/8cirque.jpg")} />
                    <p className="legend">Notre équipe vous attends !</p>
                </div>
                <div className="carousel">
                    <img src={require("../assets/img/cirque/pexels-dr-kausik-paul-6054279.jpg")} />
                    <p className="legend">Les meilleures maquillages pour les meilleures prestations</p>
                </div>
                <div className="carousel">
                    <img src={require("../assets/img/cirque/9cirque.jpg")} />
                    <p className="legend">Des animaux à l'oeuvre</p>
                </div>
            </Carousel>
        </div>
        </>
    )
}

export default Presentation;