import React from 'react';
import { createContext } from 'react';
import axios from 'axios';

export const Context=createContext()

export const Datacenter = ({children}) => {


    console.log('hey hey hey')

    return (
        <div>
              <Context.Provider value={{}}>
                {children}
            </Context.Provider>
        </div>
    );
}


