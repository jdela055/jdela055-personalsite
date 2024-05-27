import React from 'react';
import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import { FaClockRotateLeft } from "react-icons/fa6";

export default function Experience() {

    return (
        <Card className="w-full h-full p-4 font-sourceCodePro" radius="none" shadow="md">
            <CardHeader>
                <div className="flex w-1/2 justify-start">
                    <h1 className="font-bold"> Skills </h1>
                </div>
                <div className="flex w-1/2 justify-end">
                    <FaClockRotateLeft className="w-7 h-7"/>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p> I got mad experience, yo. </p>
            </CardBody>
        </Card>
    );
}