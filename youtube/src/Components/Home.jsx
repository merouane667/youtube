import React, { useContext } from 'react';
import { Context } from '../Datacenter/Datacenter';
import Video from './Video';

const Home = () => {
    const {dataState} = useContext(Context);
   
    return (
        <div className="row ">
            {dataState.map(video=>(

            <Video video={video}/>   

        ))}

    </div>

    );
}

export default Home;
