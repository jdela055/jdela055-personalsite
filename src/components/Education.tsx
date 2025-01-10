import React from 'react';
import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import { FaUserGraduate } from 'react-icons/fa';

import { Image, Spacer } from '@nextui-org/react';

import ucrLogo from '../assets/ucr_logo.png';

export default function Education() {

    return (
        <Card className="text-lg xl:text-xl w-full h-full p-4 font-sourceCodePro" radius="none" shadow="md">
            <CardHeader>
                <div className="flex w-1/2 justify-start">
                    <h1 className="font-bold"> Education </h1>
                </div>
                <div className="flex w-1/2 justify-end">
                    <FaUserGraduate className="w-7 h-7"/>
                </div>
            </CardHeader>
            {/* <Divider/> */}
            <CardBody className="gap-5">
                {/* <p> I got mad education, yo... And I plan on getting more! </p> */}
                
                <Divider/>
                <div className="flex flex-row justify-evenly items-center">
                    <div className="flex flex-col">
                        <h1 className="font-bold"> University of California, Riverside </h1>
                        <p> Bachelor's of Science in Computer Science </p>
                        <p> 2019-2024 </p>
                    </div>
                    <Image
                        src={ucrLogo}
                        radius="none"
                        width="70px"
                        height="70px"
                        alt="UCR Logo"
                    />
                </div>
                <Divider/>
            </CardBody>
        </Card>
    );
}