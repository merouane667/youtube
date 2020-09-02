import React, { useEffect } from 'react';
import { createContext } from 'react';

import {youtube} from '../apis/youtube'
import { useState } from 'react';
const KEY = 'AIzaSyCG3J6zlyzayIS71DXAsAml-lwxzOc8y9I';


export const Context=createContext()

export const Datacenter = ({children}) => {
        const [dataState,setDataState] = useState([])

        const fetchData =  async  ()=>{
            const request = await youtube.get('search',
            {params: {
                part:'snippet',
                maxResults: 5,
                key: KEY,
                q:'week'
            }
            });
            setDataState(request.data.items);
        }
        fetchData()

    return (
        <div>
              <Context.Provider value={{dataState}}>
                {children}
            </Context.Provider>
        </div>
    );
}


