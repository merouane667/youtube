import React from 'react';
import { createContext } from 'react';
import axios from 'axios';

export const Context=createContext()

export const Datacenter = ({children}) => {


    console.log('yooooo')

    return (
        <div>
              <Context.Provider value={{}}>
                {children}
            </Context.Provider>
        </div>
    );
}


