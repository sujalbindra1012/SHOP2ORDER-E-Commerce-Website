import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/entry.jpg';


const Hero = () => {
    return (
        <div className="hero-container">
        <img src={hero_image} alt="" className="hero-image" />
        <div className="hero-text">
            <h2>Discover the Best Grocery Deals</h2>
            <p>Get fresh produce, quality meats, and more at unbeatable prices. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, doloribus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, veniam?</p>
            <div className="hero-button">Shop Now</div>
        </div>
    </div>
        

    )
}
export default Hero