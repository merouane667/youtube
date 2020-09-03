import React from 'react';
import {Link} from 'react-router-dom';
import './Video.css';

const Video = ({video}) => {
    if(!video.id.videoId)
    return ''
    

    const url_img = video.snippet.thumbnails.medium.url;
    const title = video.snippet.title ;
    const channelTitle = video.snippet.channelTitle;
    const date = video.snippet.publishedAt;
    const url_video = video.id.videoId;
    return (
        <div className='col-md-4 mb-3'>
            <Link to={`play/${url_video}`} className="lien_video">
                <img src={url_img}  className="img"></img>
               
            </Link>
            <div style={{width:'300px'}}>
                <h6>{(title.substring(0, 50) )+"..."}</h6>
                <p className="para" >
                    {channelTitle} 
                    <br/> 
                    {new Date(date).toDateString()}
                </p>          
            </div>
        </div>
    );
}

export default Video;
