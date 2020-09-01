import React, { useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import {youtube} from '../../apis/youtube'
const KEY = 'AIzaSyCGJO2ifPaivWSFtXgNX6YGiYoHZOJkUtM';


export const Context=createContext()

export const Datacenter = ({children}) => {




        const fetchData =  async  ()=>{
            const request = await youtube.get('search',
            {params: {
                part:'snippet',
                maxResults: 5,
                key: KEY,
                q:'week'
            }
            });
           console.log(request);
        }
        fetchData()

    return (
        <div>
              <Context.Provider value={{}}>
                {children}
            </Context.Provider>
        </div>
    );
}


