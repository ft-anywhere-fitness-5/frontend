import React, { useState } from "react";
import { ImageData } from "./onBoardImages";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import styled from "styled-components";

//shows user how to use site through slides. viewable only once on first sign-in
//maybe start with dummy images
//user is able to skip  whole process with button, or what have you

// viewable on '/onboarding'

const StyledSection = styled.div`
    .slider {
        position: relative;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image {
        max-width: 1000px;
        max-height: 1000px;
        border-radius: 10px;
    }

    .right-arrow {
        position: absolute;
        top: 50%;
        right: 35px;
        font-size: 3rem;
        color: black;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }

    .left-arrow {
        position: absolute;
        top: 50%;
        left: 35px;
        font-size: 3rem;
        color: black;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }
    .slide {
        opacity: 0;
        transition-duration: 2s ease;
    }

    .slide.active {
        opacity: 3;
        transition-duration: 2s;
        transform: scale(1);
    }
`


const Onboarding = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return(
        <StyledSection className='slider'>
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
          {ImageData.map((slide, idx) => {
            return (
              <div 
                className={idx === current ? 'slide active' : 'slide'} 
                key={idx}
              >
                {idx === current && (
                  <img src={slide.image} alt='fitness' className='image' />
                )}                    
              </div>
            )
          })}
        </StyledSection>
    )
}

export default Onboarding;