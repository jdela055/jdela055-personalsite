import React from 'react';

import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';

export default function Education() {

    return (
        <Card className="w-full h-full p-4 font-sourceCodePro" radius="none" shadow="md">
            <CardHeader>
                <h1 className="font-bold"> Education </h1>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p> I got mad education, yo. </p>
            </CardBody>
        </Card>


    );

}