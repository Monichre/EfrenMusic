import React, {Component} from 'react'
import Main from './Components/Sections/Main'
import Songs from './Components/Sections/Songs'
import Albums from './Components/Sections/Albums'
import Videos from './Components/Sections/Videos'
import Error from './Components/Error'



export const CONSTANTS = {
    renderProperComponent: (section, data) => {
        console.log(section)
        if(section.fields.sectionTitle.toLowerCase() === 'songs') {
            return <Songs section={section} data={data} />
        } else if (section.fields.sectionTitle.toLowerCase() === 'videos') {
            return <Videos section={section} data={data} />
        } else if (section.fields.sectionTitle.toLowerCase() === 'albums') {
            return <Albums section={section} data={data} />
        } 
        else if (section.fields.sectionTitle.toLowerCase() === 'home') {
            return <Main section={section} data={data} />
        } else {
            return <Error />
        }
    }
}