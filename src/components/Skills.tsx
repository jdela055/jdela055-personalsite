import React from 'react';

import { Card, CardHeader, CardBody } from '@nextui-org/react';

export default function Skills() {

    return (
        <Card className="font-sourceCodePro flex mx-8 sm:w-full lg:w-5/12 h-5/6 p-3" radius="none" shadow="md">
            <CardHeader>
                <h1 className="font-bold"> Skills </h1>
            </CardHeader>
            <CardBody>
                <p> I got mad skills, yo. </p>
            </CardBody>
        </Card>


    );

}