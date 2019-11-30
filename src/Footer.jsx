import React from 'react'

const Footer = () => {
    return (
        <div style={{display: "flex", justifyContent: "space-between", padding: "40px 40px"}}>
        <a href="https://github.com/m-hodges" target="_blank" rel="noopener noreferrer">
            <img src='/icons/github-brands.svg' alt='Github'></img>
        </a>
        <a href="https://www.linkedin.com/in/michael-hodges-124089b4" target="_blank" rel="noopener noreferrer">
            <img src='/icons/linkedin-brands.svg' alt='LinkedIn'></img>
        </a>
        {/* eslint-disable-next-line */}
        <a href="/other/mhodges_cv.pdf" target="_blank" rel="noopener noreferrer">
            <img src='/icons/file-pdf-solid.svg' alt='CV'></img>
        </a>
        <a href="mailto: michaelcshodges@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src='/icons/envelope-solid.svg' alt='Email'></img>
        </a>
        </div>
    )
}

export default Footer