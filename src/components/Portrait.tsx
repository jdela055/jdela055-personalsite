import React from 'react';
import { Image } from '@nextui-org/react';
import pfp from '../assets/portrait.jpg';


export default function Portrait() {


    return (

        <div className="flex flex-col items-center">
            {/* contact info + github links here */}
            <p className="m-8 text-3xl font-sourceCodePro font-bold text-white"> JULIAN DELA ROSA-BILLINGS </p>
            
            <Image
                width="250px"
                src={pfp}
                shadow="md"
                radius="full"
            />


            
        </div>
    );
}


    