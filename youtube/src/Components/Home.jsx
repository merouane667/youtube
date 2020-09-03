import React, { useContext } from 'react';
import { Context } from '../Datacenter/Datacenter';
import Video from './Video';

const Home = () => {
    const {dataState} = useContext(Context);
   
    return (
    <div className="container">
            <div className="row mt-5">
                    {dataState.map(video=>(

                    <Video video={video}/>   

                ))}

            </div>
    </div>

    );
}

export default Home;
