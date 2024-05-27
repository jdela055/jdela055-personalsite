import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';


import { Image } from '@nextui-org/react';

import NavbarComponent from './components/NavbarComponent';


export default function App() {
  return (

    <NextUIProvider>
      <div className="flex flex-row min-h-screen min-w-screen bg-white">

          <div id="sidebar" className="flex w-1/3 min-h-full bg-green-800">
            {/* contact info + github links here */}
            <p className="font-oswald text-white"> JULIAN DELA ROSA-BILLINGS </p>

            <Image></Image>

          </div>



        <div className="flex w-full self-start">
          <NavbarComponent/>
        </div>

      </div>
    </NextUIProvider>

  );
}