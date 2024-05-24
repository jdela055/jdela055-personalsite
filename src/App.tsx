import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NextUIProvider } from '@nextui-org/react';

import { Card } from '@nextui-org/react';

function App() {
  return (

    <NextUIProvider>
      
      
      <div className="flex flex-row min-h-screen min-w-screen justify-center items-center">
        <Card className="flex"> 
          <Card>
            Dude!
          </Card>
        </Card>
      </div>
    
    
    
    
    </NextUIProvider>

  );
}

export default App;
