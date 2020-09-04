import React,{useContext,} from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../Datacenter/Datacenter';
import './Video.css';

const Video = ({video}) => {
    const {subscribe, subscribes}=useContext(Context);
     if(!video.id.videoId)
    return ''
    const subs="btn btn-danger btn-sm float-right";
    const unsubs="btn btn-secondary btn-sm float-right";
    const sub="Subscribe";
    const unsub="Subscribed";
    const sendtodatacenter=()=>{
     
        subscribe(video.id.videoId)
        
    }
  

    const url_img = video.snippet.thumbnails.default.url;
    const title = video.snippet.title ;
    const channelTitle = video.snippet.channelTitle;
    const date = video.snippet.publishedAt;
    const url_video = video.id.videoId;
    return (
        <div className='col-md-4 mb-3 content '>
            <Link to={`play/${url_video}`} className="lien_video">
                <img src={url_img}  className="img"></img>
               
            </Link>
            <div >
                <h6>{(title.substring(0, 40) )+"..."}</h6>
                <p className="para" >
                    {channelTitle} 
                    <br/> 
                    {new Date(date).toDateString()}
                </p>
                <button onClick={sendtodatacenter} 
                className={subscribes.filter(vid => vid.id.videoId === video.id.videoId).length>0?unsubs:subs}>
                {subscribes.filter(vid => vid.id.videoId === video.id.videoId).length>0?unsub:sub}
                </button>          
            </div>
        </div>
    );
}

export default Video;
