import React from 'react';

import { Dispatch, SetStateAction } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { Link } from '@nextui-org/react';



export default function NavbarComponent( {setContent} : {setContent: Dispatch<SetStateAction<string>>}) {
    
    
    // need onCLick to scroll to desired section in page
    return (    
        <Navbar className="justify-evenly bg-amber-200 font-sourceCodePro font-bold shadow-md">
            <NavbarItem>
                <Link className="cursor-pointer" 
                    isBlock={true}
                    onPress={(e)=>setContent('about-me')}
                    underline="focus"> 
                    {'{'} about me {'}'} 
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link className="cursor-pointer"
                    isBlock={true} 
                    onPress={(e)=>setContent('skills')} 
                    underline="focus">  
                    {'{'} skills {'}'} 
                </Link>
            </NavbarItem>
                <Link className="cursor-pointer" 
                    isBlock={true}
                    onPress={(e)=>setContent('education')} 
                    underline="focus">  
                    {'{'} education {'}'} 
                </Link>
            <NavbarItem>
                <Link className="cursor-pointer"
                    isBlock={true}
                    onPress={(e)=>setContent('experience')}
                    underline="focus">  
                    {'{'} experience {'}'} 
                </Link>
            </NavbarItem>
        </Navbar>
    );
}

