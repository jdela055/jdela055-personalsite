import React from 'react';

import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';



export default function ContentComponent( {currentState} : {currentState: string} ) {
    
    if (currentState === 'about-me') {
        return <AboutMe/>;
    }

    else if (currentState === 'skills') {
        return <Skills/>;
    }

    else if (currentState === 'education') {
        return <Education/>;
    }

    else {
        return <Experience/>;
    }
}