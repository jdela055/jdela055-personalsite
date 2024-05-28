import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import { NextUIProvider } from '@nextui-org/react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';


import { Image } from '@nextui-org/react';

import NavbarComponent from './components/NavbarComponent';
import Sidebar from './components/Sidebar';
import ContentComponent from './components/ContentComponent';


export default function App() {
  
  const [content, setContent] = useState('about-me'); //default to about-me

  return (    
    <NextUIProvider>
      <div id="main-container" className="flex flex-row min-h-screen min-w-screen bg-red-300">
        <div id="sidebar" className="min-h-full">
          <Sidebar/>
        </div>
        <div id="col-container" className="flex flex-col min-h-fit w-full">
          <NavbarComponent content={content} setContent={setContent}/>
          {/* flex-grow is the correct way to fill the remainder of a container*/}
          <div className="flex flex-grow w-full justify-center items-center">
            <div className="max-h-[600px] h-4/6 w-3/5">
              <ContentComponent currentState={content}/>
            </div>
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}