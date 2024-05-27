import React from 'react';
import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import { FaUserGraduate } from 'react-icons/fa';

export default function Education() {

    return (
        <Card className="w-full h-full p-4 font-sourceCodePro" radius="none" shadow="md">
            <CardHeader>
                <div className="flex w-1/2 justify-start">
                    <h1 className="font-bold"> Education </h1>
                </div>
                <div className="flex w-1/2 justify-end">
                    <FaUserGraduate className="w-7 h-7"/>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p> I got mad education, yo. </p>
            </CardBody>
        </Card>
    );
}