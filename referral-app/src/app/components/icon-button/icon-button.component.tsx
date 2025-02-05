import React from 'react';

import { ReactNode } from "react";

const IconButton = ({children}: {children: ReactNode}) => {
      return (
           <button className="flex items-center justify-center p-2 text-white rounded-full focus:outline-none">
            {children}
          </button>
      );
    };
    

export default IconButton;
