import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Songs from './Songs'

class SongsModal extends React.Component {
  constructor (props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount () {
    document.body.appendChild(this.el)
  }

  componentWillUnmount () {
    document.body.removeChild(this.el)
  }

  render () {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

export default class Audio extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showModal: false
    }
  }
  render () {
    const { songs } = this.props.data
    let Modal
    if (this.props.horizontalActive === 1) {
      Modal = (<SongsModal>
        <Songs songs={songs} />
      </SongsModal>)
    }

    return (

      <div className='hero fs'>
        <div className='bg faded' />
        <div className='vcenter'>
          <div className='container'>
            <div className='grid'>
              <div className='col-1 date'>2017</div>
              <div className='col-7'>
                <a className='project-link'>
                  <h1 className='stripe animatedText'>{this.props.section.fields.sectionTitle}</h1>
                </a>
                <div className='sub-label'>Pye Luis</div>
              </div>
            </div>
          </div>
        </div>
        {Modal}
      </div >
    )
  }
}
