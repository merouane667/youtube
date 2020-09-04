import React, { useEffect } from 'react';
import { createContext } from 'react';

import {youtube} from '../apis/youtube'
import { useState } from 'react';
import axios from 'axios';
const KEY = 'AIzaSyCG3J6zlyzayIS71DXAsAml-lwxzOc8y9I';


export const Context=createContext()

export const Datacenter = ({children}) => {
        const [dataState,setDataState] = useState([])
        const [subscribes, setSubscribe] = useState([])

        const subscribe=(id)=>{


        const subs=subscribes.filter(data=>data.id.videoId==id)
         if(subs.length===0)
         { 
             setSubscribe([...subscribes,...dataState.filter(data=>data.id.videoId==id)])
         }
         else{
             setSubscribe([...subscribes.filter(data=>data.id.videoId!=id)])
         }
        }

        useEffect(()  => {
            const fetch = async ()=>{

                const res = await axios.get('http://localhost:3000/items')
                setDataState(res.data)
            }
            fetch()

        }, []);
      
    return (
        <div>
              <Context.Provider value={{dataState,subscribe,subscribes}}>
                {children}
            </Context.Provider>
        </div>
    );
}


