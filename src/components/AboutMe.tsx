import React from 'react';

import { VscAccount } from 'react-icons/vsc';

import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';

export default function AboutMe() {

    return (
        <Card className="text-lg xl:text-xl w-full h-full p-4 font-sourceCodePro" radius="none" shadow="lg">
            <CardHeader id="about-header" className="flex flex-row">
                <div className="flex w-1/2 justify-start">
                    <h1 className="font-bold"> About Me </h1>
                </div>
                    <div className="flex w-1/2 justify-end">
                </div>
                <VscAccount className="w-7 h-7"/>
            </CardHeader>
            <Divider/>
            <CardBody className="flex gap-10">
                {/* <p> Professionally amatuer! 😎 </p> */}
                <p>
                    I've worked on a wide variety of projects and consdier myself an intermediate in many things.
                    I have a background in multimedia and tech support and I am currently studying Computer Science.
                </p>
                <p>
                    I'm currently focused on full-stack web development, but I am always interested in exploring new skills and projects,
                    and working with new people.
                </p>

            </CardBody>
        </Card>
    );  
}