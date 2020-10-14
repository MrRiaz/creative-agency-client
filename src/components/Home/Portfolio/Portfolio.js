import React from 'react';
import './Portfolio.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousel1 from '../../../images/carousel-5.png';
import carousel2 from '../../../images/carousel-1.png';
import carousel3 from '../../../images/carousel-4.png';

const Portfolio = () => {
    return (
        <section className="portfolio text-center">
            <div className="container">
                <div className="container">
                    <h2 className="text-white mb-5">Here are some of <span className="brand-color">our works</span></h2>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img className="img-fluid d-block w-100" src={carousel1} alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img className="img-fluid d-block w-100" src={carousel2}  alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img className="img-fluid d-block w-100" src={carousel3}  alt="..." />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;