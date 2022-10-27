import React from 'react'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-section'>
        <video src='/videos/video-1.mp4' autoPlay loop/>
        <h1 className='hero-head'>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='buttons'>
            <button className='start'>GET STARTED</button>
            <button className='watch'>WATCH TRAILER <i className='fas fa-play-circle'></i></button>
        </div>
    </div>
  )
}

export default HeroSection