import React, {Component} from 'react'
import Main from './Components/Sections/Main'
import Audio from './Components/Sections/Audio'
import Visual from './Components/Sections/Visual'
import Error from './Components/Error'



export const CONSTANTS = {
    renderProperComponent: (section, data, horizontalActive) => {
        console.log(section)
        if(section.fields.sectionTitle.toLowerCase() === 'audio') {
            return <Audio horizontalActive={horizontalActive} section={section} data={data} />
        } else if (section.fields.sectionTitle.toLowerCase() === 'visual') {
            return <Visual horizontalActive={horizontalActive} section={section} data={data} />
        } else if (section.fields.sectionTitle.toLowerCase() === 'home') {
            return <Main horizontalActive={horizontalActive} section={section} data={data} />
        } else {
            return <Error />
        }
    }
}