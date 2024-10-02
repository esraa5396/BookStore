import './slider.css';
import React, { useState } from 'react';
import FirstBook from '../../images/book1.png';
import SecondBook from '../../images/book2.png';
import ThirdBook from '../../images/book3.png';

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (diraction) =>{
        if(diraction === 'left'){
            setSlideIndex(slideIndex > 1 ? slideIndex - 1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <div className="slider-container">
            <i onClick={() => handleClick("left")} className="bi bi-chevron-double-left arrow-left"></i>
            <div style={{ transform: `translateX(${slideIndex * -100}vw)` }} className="slider-wrapper">
                <div className="slide first-slide">
                    <div className="slide-img-wrapper">
                        <img src={FirstBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-wrapper">Book Store</h1>
                        <p className="slide-info-desc">It's not just reading. it's living the adventure.</p>
                    </div>
                </div>
                <div className="slide second-slide">
                    <div className="slide-img-wrapper">
                        <img src={SecondBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-wrapper">The Books For Everyone</h1>
                        <p className="slide-info-desc">You can read at the book store or at home</p>
                    </div>
                </div>
                <div className="slide third-slide">
                    <div className="slide-img-wrapper">
                        <img src={ThirdBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-wrapper">check Out The New Titles</h1>
                        <p className="slide-info-desc">We send you the book you want at home.</p>
                    </div>
                </div>
            </div>
            <i onClick={() => handleClick("right")} className="bi bi-chevron-double-right arrow-right"></i>
        </div>
    )
}
