import React from 'react';
import './Playvideo.css'

const Playvideo = (props) => {
    const {id}=props.match.params;
    return (
        <div className="container">
            <iframe width="420" height="315"  className='mt-5 iframe'
            src={`https://www.youtube.com/embed/${id}`}>
            </iframe>
        </div>
    );
}

export default Playvideo;
