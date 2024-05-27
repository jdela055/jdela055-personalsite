import React from 'react';

import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';

export default function AboutMe() {

    return (
        <Card className="w-full h-full p-4 font-sourceCodePro" radius="none" shadow="md">
            <CardHeader className="flex">
                <h1 className="font-bold"> About Me </h1>
            </CardHeader>
            <Divider/>
            <CardBody>
                {/* <p> I am a full-stack developer with a passion for creating and learning. </p> */}

                <p> I got mad about-me, yo. </p>
            </CardBody>
        </Card>
    );
    
}