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
                    Welcome to my humble React site! 😎
                    I hope you like the colors, my partner helped me pick them :) and the photo of my dog :) His name is Chewie and he's really cool and I love him :) He's wearing a crown in the photo because it was his birthday :)
                </p>
                <p>
                    I'm actively working on revamping this site with blog functionality using Next.js and MDX...
                    <br/>
                    <br/>
                    👉👈
                    <br/>
                    👉👈
                    <br/>
                    👉👈
                    <br/>
                    <a href="https://gumbubberman.itch.io/kb-rougelike"> link to my only published game :) I hope to work on more games in the future :) </a>
                </p>

            </CardBody>
        </Card>
    );  
}