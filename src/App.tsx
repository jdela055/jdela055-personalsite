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

      <div className="min-w-screen min-h-screen bg-red-300">

        <div id="main-container" className="flex flex-row min-h-screen min-w-screen bg-red-300">
          <div id="sidebar" className="flex min-h-full">
            <Sidebar/>
          </div>

          <div id="col-container" className="flex flex-col min-h-full w-full">
            <div id="navbar">
              <NavbarComponent content={content} setContent={setContent}/>
            </div>

            <div id="content" className="flex flex-none justify-center items-center min-w-full min-h-full">
              <div className="w-2/3 xl:w-2/5 h-5/6">
                <ContentComponent currentState={content}/>
              </div>
            </div>
          
          </div>

        </div>


      </div>
    </NextUIProvider>

  );
}