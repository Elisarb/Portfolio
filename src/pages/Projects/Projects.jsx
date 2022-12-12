import React from 'react';
import '../Projects/Projects.scss';
import Starry from '../../components/starry/starry';
import 'simplebar-react/dist/simplebar.min.css';
import ReactSimplyCarouselExample from '../../components/carousel/carousel'
import Resume from '../../pages/Resume/Resume.jsx'

const Projects = () => {

    return(
        <div className='projects-page'>
          <Starry></Starry>
            <Resume></Resume>
            <div className='title'>
                
                <div className='subrayado'> 
                <h1>Projects 
                </h1></div>
                
            </div>
            <ReactSimplyCarouselExample></ReactSimplyCarouselExample>
            
            <div className='veil'>
            </div>
            
        </div>
        
    )
}

export default Projects