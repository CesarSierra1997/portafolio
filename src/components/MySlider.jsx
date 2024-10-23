// src/components/MySlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TailwindIc from '../components/icons/react/Tailwind.jsx';
import AstroIcon from '../components/icons/react/AstroIncon.jsx';
import Django from '../components/icons/react/Django.jsx';
import PythonIcon from '../components/icons/react/Python.jsx';
import AndroidStudio from '../components/icons/react/Android.jsx';
import Kali from '../components/icons/react/Kali.jsx';
import { slide } from 'astro:transitions';



const MySlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        arrows: true, 


    };

    return (
        <div {...slide({ duration: 500 })}>
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
                    <i><TailwindIc class="iconosJx" style={{ color: '#06B6D4' }}/> </i>
                    <p>Tailwind CSS</p>
                </div>
                <div>
                    <i className="fab fa-js fa-3x" style={{ color: '#f7df1e' }}></i>
                    <p>JavaScript</p>
                </div>
                <div>
                    <i className="fab fa-node-js fa-3x" style={{ color: '#339933' }}></i>
                    <p>Node.js</p>
                </div>
                <div>
                     <i><AstroIcon class="iconosJx"  /> </i>
                    <p>Astro</p>
                </div>
                <div>
                    <i><PythonIcon class="iconosJx" /> </i>
                    <p>Python</p>
                </div>
                <div>
                    <i><Django class="iconosJx" /> </i>
                    <p>Django</p>
                </div>

                {/* <div>
                    <i className="fab fa-react fa-3x" style={{ color: '#61dafb' }}></i>
                    <p>React</p>
                </div> */}
                <div>
                    <i class="fa-brands fa-flutter fa-3x" style={{ color: '#02569B' }}></i>
                    <p>Flutter</p>
                </div>

        </Slider>
        </div>


    );
};

const MySlider2 = () => {
    const settings = {
        // dots: true,
        arrows: false, 
        pauseOnHover: false,
        infinite: true,
        speed: 3200,
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2500,
        draggable: false, // Desactiva el arrastre
        swipe: false, // Desactiva el deslizamiento en dispositivos táctiles
        touchMove: false, // Desactiva el movimiento tácti
    };

    return (
        <div className="slider-container">

            <Slider {...settings}>
                <div>
                    <i className="fa-brands fa-git-alt fa-3x" style={{ color: 'gray'}} ></i>
                </div>
                <div>
                    <i class="fa-brands fa-github fa-3x" style={{ color: 'gray' }}></i>
                </div>
                <div>
                    <i class="fa-brands fa-windows fa-3x" style={{ color: 'gray' }}></i>
                </div>
                <div>
                    <i class="fa-brands fa-linux fa-3x" style={{ color: 'gray' }}></i>
                </div>
                <div>
                    <i><Kali className="size-12" /> </i>
                </div>
                <div>
                    <i class="fa-brands fa-android fa-3x" style={{ color: 'gray' }}></i>
                </div>
                <div>
                    <i><AndroidStudio /> </i>
                </div>
                <div>
                    <i class="fa-brands fa-wordpress fa-3x" style={{ color: 'gray' }}></i>
                </div>
                <div>
                    <i class="fa-brands fa-cpanel fa-3x" style={{ color: 'gray' }}></i>
                </div>
                <div>
                    <i class="fa-solid fa-database fa-2x" style={{ color: 'gray' }}></i>
                </div>
                <div>
                    <i class="fa-brands fa-figma fa-3x" style={{ color: 'gray' }}></i>
                </div>
            </Slider>
        </div>

    );
};

export { MySlider, MySlider2 };
