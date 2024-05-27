import React from 'react';


import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { Link } from '@nextui-org/react';



export default function NavbarComponent() {
    
    
    // need onCLick to scroll to desired section in page
    return (    
    //     // make navbar scroll to desired section in page
    //     <Navbar className="flex bg-amber-200 font-sourceCodePro font-bold shadow-md">
    //         <NavbarContent>
    //             {/* maybe replace () with {} ? */}
    //             <NavbarItem>
    //                 <Link underline="focus"> {'{'} about me {'}'} </Link>
    //             </NavbarItem>
    //             <NavbarItem>
    //                 <Link underline="focus">  {'{'} skills {'}'} </Link>
    //             </NavbarItem>
    //             <NavbarItem>
    //                 <Link underline="focus">  {'{'} education {'}'} </Link>
    //             </NavbarItem>
    //             <NavbarItem>
    //                 <Link underline="focus">  {'{'} experience {'}'} </Link>
    //             </NavbarItem>
    //         </NavbarContent>
    //     </Navbar>

        <Navbar className="justify-evenly bg-amber-200 font-sourceCodePro font-bold shadow-md">
            <NavbarItem>
                <Link underline="focus"> {'{'} about me {'}'} </Link>
            </NavbarItem>
            <NavbarItem>
                <Link underline="focus">  {'{'} skills {'}'} </Link>
            </NavbarItem>
                <Link underline="focus">  {'{'} education {'}'} </Link>
            <NavbarItem>
                <Link underline="focus">  {'{'} experience {'}'} </Link>
            </NavbarItem>
        </Navbar>
        


    );
}

