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
                    Welcome to my little React Native site! 😎
                    I hope you like the colors :)
                </p>
                <p>
                    FOR THE LOVE OF GOD GIVE ME A JOB! 😭
                </p>

            </CardBody>
        </Card>
    );  
}