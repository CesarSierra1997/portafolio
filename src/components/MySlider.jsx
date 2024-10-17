// src/components/MySlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AstroIcon from '../components/icons/react/AstroIncon.jsx';
import Django from '../components/icons/react/Django.jsx';
import Android from '../components/icons/react/Android.jsx';



const MySlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    return (

        <Slider {...settings}>
                <div>
                    <i className="fab fa-html5 fa-3x" style={{ color: '#e34f26' }}></i>
                    <p>HTML5</p>
                </div>
                <div>
                    <i className="fab fa-css3-alt fa-3x" style={{ color: '#1572b6' }}></i>
                    <p>CSS3</p>
                </div>
                <div>
                    <i className="fab fa-js fa-3x" style={{ color: '#f7df1e' }}></i>
                    <p>JavaScript</p>
                </div>
                <div>
                     <i><AstroIcon class="iconosJx"  /> </i>
                    <p>Astro</p>
                </div>
                <div>
                    <i className="fab fa-python fa-3x" style={{ color: '#306998' }}></i>
                    <p>Python</p>
                </div>
                <div>
                    <i><Django class="iconosJx" /> </i>
                    <p>Django</p>
                </div>
                <div>
                    <i className="fab fa-node-js fa-3x" style={{ color: '#339933' }}></i>
                    <p>Node.js</p>
                </div>
                <div>
                    <i className="fab fa-react fa-3x" style={{ color: '#61dafb' }}></i>
                    <p>React</p>
                </div>
                <div>
                    <i><Android class="iconosJx" /> </i>
                    <p>Android</p>
                </div>
        </Slider>

    );
};

const MySlider2 = () => {
    const settings = {
        // dots: true,
        arrows: false, 
        pauseOnHover: false,
        infinite: true,
        speed: 1400,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    return (
        <div className="slider-container">

            <Slider {...settings}>
                <div>
                    <i className="fab fa-html5 fa-3x" style={{ color: '#e34f26' }}></i>
                </div>
                <div>
                    <i className="fab fa-css3-alt fa-3x" style={{ color: '#1572b6' }}></i>
                </div>
                <div>
                    <i className="fab fa-js fa-3x" style={{ color: '#f7df1e' }}></i>
                </div>
                <div>
                    <i className="fab fa-python fa-3x" style={{ color: '#306998' }}></i>
                </div>
                <div>
                    <i className="fab fa-node-js fa-3x" style={{ color: '#339933' }}></i>
                </div>
                <div>
                    <i className="fab fa-react fa-3x" style={{ color: '#61dafb' }}></i>
                </div>
            </Slider>
        </div>

    );
};

export { MySlider, MySlider2 };
