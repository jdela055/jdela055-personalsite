import React from 'react';


import { useState, useEffect } from 'react';

import { Dispatch, SetStateAction } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { Link, Button } from '@nextui-org/react';


// useState passed in from App.tsx
export default function NavbarComponent( {content, setContent} : {content:string, setContent:Dispatch<SetStateAction<string>>}) {

    const [aboutMe, setAboutMe] = useState('{ about me }'); // about me is selected first
    const [skills, setSkills] = useState('skills');
    const [education, setEducation] = useState('education');
    const [experience, setExperience] = useState('experience');

    const CheckContent = () => {
        // alert(content);
        if (content === 'about-me') {
            setAboutMe('{ about me }');
            setSkills('skills');
            setEducation('education');
            setExperience('experience');
        }

        else if (content === 'skills') {
            setAboutMe('about me');
            setSkills('{ skills }');
            setEducation('education');
            setExperience('experience');
        }

        else if (content === 'education') {
            setAboutMe('about me');
            setSkills('skills');
            setEducation('{ education }');
            setExperience('experience');
        }

        else if (content === 'experience') {
            setAboutMe('about me');
            setSkills('skills');
            setEducation('education');
            setExperience('{ experience }');
        }
    }

    useEffect(() => {
        CheckContent();
    }, [content]);

    // only render the curly braces around link when its selected
    // need onCLick to scroll to desired section in page
    return (    
        <Navbar className="justify-evenly bg-amber-200 font-sourceCodePro shadow-md">
            <NavbarItem>
                <Button className="cursor-pointer text-xl"
                    color="primary"
                    variant="light"
                    as={Link}
                    isBlock={true}
                    onPress={(e)=>setContent('about-me')}
                >
                    <p className="font-bold"> {aboutMe} </p>
                </Button>
            </NavbarItem>
            <NavbarItem>
                <Button className="cursor-pointer text-xl"
                    color="primary"
                    variant="light"
                    as={Link}
                    isBlock={true}
                    onPress={(e)=>setContent('skills')}
                >
                    <p className="font-bold"> {skills} </p>
                </Button>
            </NavbarItem>
            <NavbarItem>
                <Button className="cursor-pointer text-xl"
                    color="primary"
                    variant="light"
                    as={Link}
                    isBlock={true}
                    onPress={(e)=>setContent('education')}
                >
                    <p className="font-bold"> {education} </p>
                </Button>
            </NavbarItem>
            <NavbarItem>
                <Button className="cursor-pointer text-xl"
                    color="primary"
                    variant="light"
                    as={Link}
                    isBlock={true}
                    onPress={(e)=>setContent('experience')}
                >
                    <p className="font-bold"> {experience} </p>
                </Button>
            </NavbarItem>
        </Navbar>
    );
}

