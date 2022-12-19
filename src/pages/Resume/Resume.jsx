import React from 'react';
import "../Resume/Resume.scss"
import profilepic from '../../assets/profile.png'

const Resume = () => {

    return(
        <div className="resume-container">
        <div className='resume-text-container'>
        <h1>
        &lt;Elisa Rojas&gt;

            </h1>
        <h3>Full Stack Developer Jr.</h3>
        <p>Electronic Engineering Student. Just graduated from Upgrade Hub as a Full Stack Web Developer. Passionate about languages and spacecrafts.</p>
        </div>
        <div className='img-container'>
            <img src={profilepic}/>
        </div>
        
        </div>
    )
}
export default Resume