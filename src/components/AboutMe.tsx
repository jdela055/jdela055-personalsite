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
                    Welcome to my humble little React Native site! 😎
                    I hope you like the colors, my partner helped me pick them :) and the photo of my dog :) His name is Chewie and he's really cool and I love him :) He's wearing a crown in the photo because it was his birthday :)
                </p>
                <p>
                    This site is a work in progress, I'll keep updating it over time. *note to self: figure out how to make text changes without needing to re-deploy the site*                  
                    <br/>
                    <br/>
                    👉👈 
                    I'm like looking for a job or something so it sure would be nice and cool if a super cool employer went onto this here site and decided to give me a job :)
                </p>

            </CardBody>
        </Card>
    );  
}