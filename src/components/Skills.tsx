import React from 'react';
import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import { FaMicrochip } from 'react-icons/fa6';

export default function Skills() {

    return (
        <Card className="text-lg xl:text-xl w-full h-full p-4 font-sourceCodePro" radius="none" shadow="md">
            <CardHeader>
                <div className="flex w-1/2 justify-start">
                    <h1 className="font-bold"> Skills </h1>
                </div>
                <div className="flex w-1/2 justify-end">
                    <FaMicrochip className="w-7 h-7"/>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p> I got mad skills, yo. </p>
                
                <ul className="list-disc pl-5">
                    <li>
                        <span className="font-bold"> Languages: </span> C/C++, Python, JavaScript, HTML, CSS, SQL
                    </li>

                    <li>
                        <p></p>
                    </li>
                </ul>

                <p> I am on-time, honest, and I am highly motivated to make my own way. </p>


            </CardBody>
        </Card>
    );
}