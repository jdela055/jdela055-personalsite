import React from 'react';
import { Card, CardHeader, CardBody, Divider, Spacer } from '@nextui-org/react';
import { FaClockRotateLeft } from "react-icons/fa6";

export default function Experience() {

    return (
        <Card className="text-lg xl:text-xl w-full h-full p-4 font-sourceCodePro" radius="none" shadow="md">
            <CardHeader>
                <div className="flex w-1/2 justify-start">
                    <h1 className="font-bold"> Experience </h1>
                </div>
                <div className="flex w-1/2 justify-end">
                    <FaClockRotateLeft className="w-7 h-7"/>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody className="flex gap-9">
                <div>
                    <p> <span className="font-bold"> UCR ITS Multimedia </span> - <span className="italic"> Support Operator </span> </p>
                    <p className="text-md"> 2019-2024 </p>
                    <ul className="list-disc pl-5">
                        <li> Provided tech support both in person and over the phone </li>
                        <li> Installed and maintained distance learning equipment </li>
                        <li> Ran A/V for both live-streamed and in-person events </li>
                    </ul>
                </div>
                <div>
                    <p> <span className="font-bold"> Digital Gym, San Diego </span> - <span className="italic"> Multimedia Intern </span> </p>
                    <p className="text-md"> 2018 </p>
                    <ul className="list-disc pl-5">
                        <li> Used Adobe suite to produce promotional and brand identity materials including flyers, SVG logos, and graphics </li>
                        <li> Automated client outreach using Zapier and Constant Contact </li>
                        <li> Conducted interviews and produced documentary film </li>
                    </ul>
                </div>
                <div>
                    <p> <span className="font-bold"> California Innocence Project </span> - <span className="italic"> Inner-Office Intern </span> </p>
                    <p className="text-md"> 2017-2018 </p>
                    <ul className="list-disc pl-5">
                        <li> Evaluated sensitive appeals-court case files under NDA </li>
                        <li> Wrote and presented memos to lawyers from the California Western School of Law </li>
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
}