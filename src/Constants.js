import React, {Component} from 'react'
import Main from './Containers/Main/Main'
import Audio from './Containers/Audio/Audio'
import Visual from './Containers/Visual/Visual'
import Error from './Components/Error'

export const CONSTANTS = {
  renderProperComponent: (section, data, horizontalActive, slideIsChanging) => {
    console.log(section)
    if (section.fields.sectionTitle.toLowerCase() === 'audio') {
      return <Audio horizontalActive={horizontalActive} section={section} data={data} slideIsChanging={slideIsChanging} />
    } else if (section.fields.sectionTitle.toLowerCase() === 'visual') {
      return <Visual horizontalActive={horizontalActive} section={section} data={data} />
    } else if (section.fields.sectionTitle.toLowerCase() === 'home') {
      return <Main horizontalActive={horizontalActive} section={section} data={data} />
    } else {
      return <Error />
    }
  }
}
