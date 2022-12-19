import React from 'react';
import "../project-card/card.scss"

const Heart = (props) => {

    return (
        <div className="project-card">
            <div className='project-text'>
               <h1>{props.title}</h1> 
            </div>
            <div className='project-multimedia'>
            <video class="vjs-tech" id="vjs_video_3_html5_api" tabindex="-1" preload="metadata" muted="muted" src="https://dms.licdn.com/playlist/C4D05AQETMTpVwhO5AQ/mp4-720p-30fp-crf28/0/1670067075538?e=1672056000&amp;v=beta&amp;t=IdnpHnCNU7RzLm5IGagt-DxT_jCDm0zeyebBaqK2l6U" autoplay="autoplay" loop ></video>
            </div>
            
            
        </div>
    )
}
export default Heart