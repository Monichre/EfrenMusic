import React, {Component} from 'react'
import Main from './Components/Sections/Main'
import Audio from './Components/Sections/Audio'
import Visual from './Components/Sections/Visual'
import Error from './Components/Error'



export const CONSTANTS = {
    renderProperComponent: (section, data) => {
        console.log(section)
        if(section.fields.sectionTitle.toLowerCase() === 'audio') {
            return <Audio section={section} data={data} />
        } else if (section.fields.sectionTitle.toLowerCase() === 'visual') {
            return <Visual section={section} data={data} />
        } else if (section.fields.sectionTitle.toLowerCase() === 'home') {
            return <Main section={section} data={data} />
        } else {
            return <Error />
        }
    }
}