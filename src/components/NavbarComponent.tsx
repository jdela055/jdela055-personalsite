import React from 'react';


import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { Link } from '@nextui-org/react';




export default function NavbarComponent() {


    return (    
        // make navbar scroll to desired section in page
        <Navbar className="flex bg-orange-200 font-sourceCodePro font-bold shadow-md">
            <NavbarContent justify="center">
                {/* maybe replace () with {} ? */}
                <NavbarItem>
                    <Link> (about me) </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link> (skills) </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link> (education) </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link> (experience) </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );

}



