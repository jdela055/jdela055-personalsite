import React from 'react';
import { Image } from '@nextui-org/react';
import { FaPhone } from "react-icons/fa6";
import { FaEnvelopesBulk } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';

import { Link } from '@nextui-org/react';



import pfp from '../assets/portrait.jpg';
// import GithubLogo from '../assets/github_logo.png';
// import LinkedinLogo from '../assets/linkedin_logo.png';



export default function Sidebar() {

    return (

        <div className="flex flex-col items-center text-white font-sourceCodePro">
            {/* contact info + github links here */}
            <p className="m-8 text-3xl xl:text-4xl font-bold text-white"> JULIAN DELA ROSA-BILLINGS </p>
            <div className="flex m-2">
                <Image
                    isZoomed
                    width="250px"
                    src={pfp}
                    shadow="md"
                    radius="full"
                    alt='portrait'
                />
            </div>
            
            <div className="flex flex-col justify-center items-center h-full w-full text-xl">
                <div className="flex flex-col h-1/2 justify-evenly">
                    <div className="flex flex-col justify-center items-center">
                        <FaLocationDot className="text-amber-200"/>
                        <p> Murrieta, CA </p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <FaEnvelopesBulk className="text-amber-200"/>
                        <p> jdela055@ucr.edu </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaPhone className="text-amber-200"/>
                        <p> +1 (619) 850-3421 </p>
                    </div>
                </div>

                {/* github and LinkedIn icons here */}

                <div className="flex flex-row h-1/2 w-full justify-evenly items-center">
                    <Link className="flex flex-col jusitfy-center"
                        href="https://github.com/jdela055"
                        isExternal
                    >
                        <p className="font-bold text-white text-xl"> GitHub </p>
                        <FaGithub className="w-16 h-16 text-amber-200"/>
                    </Link>
                    <Link className="flex flex-col justify-center"
                        href="https://www.linkedin.com/in/julian-dela-rosa-billings-343500265/"
                        isExternal
                    >
                        <p className="font-bold text-white text-xl"> LinkedIn </p>
                        <FaLinkedin className="w-16 h-16 text-amber-200"/>
                    </Link>
                
                </div>

            </div>

        </div>
    );
}


    