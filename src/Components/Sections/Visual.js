import React, { Component } from 'react'
import Photography from '../Partials/Photography'
import AppStore from '../../Store/AppStore'
import { Modal } from '../Partials/Modal'

export default class Visual extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showModal: false
    }
    this.closePhotography = this.closePhotography.bind(this)
    this.setMediaFilter = this.setMediaFilter.bind(this)
  }
  setMediaFilter (str) {
    // e.preventDefault()
    console.log(str)
    this.setState({ showModal: true })
  }
  launchInkBlotMenu () {
    const vid = document.getElementById('myVideo')
    const playVid = () => {
      vid.play()
    }

    setTimeout(function () {
      playVid()
    }, 800)

    setTimeout(function () {
      document.querySelectorAll('.inkblot_container h1').forEach((elem) => elem.style.opacity = 1)
      document.querySelector('.inkblot_container_inner').style.opacity = 1
    }, 1700)
  }
  closePhotography () {
    this.setState({ showModal: false })
  }

  render () {
    const { showModal } = this.state
    const { photography } = AppStore.data
    let visModal

    if (this.props.horizontalActive === 2) {
      this.launchInkBlotMenu()
    }

    if (showModal) {
      visModal = (<Modal>
        <Photography photos={photography.fields.media} closePhotography={this.closePhotography} />
      </Modal>)
    }
    return (
      <div className='hero fs'>
        <div className='bg faded' />
        <div className='vcenter'>
          <div className='container'>
            <div className='grid'>
              <div className='col-1 date'>2017</div>
              <div className='col-7'>
                <div className='sub-label'>January</div>
                <a className='project-link'>
                  <h1 className='stripe animatedText'>{this.props.section.fields.sectionTitle}</h1>
                </a>
              </div>
            </div>
          </div>
          <div className='inkblot_container'>
            <h1 onClick={this.setMediaFilter.bind('photography')}>Photography</h1> <br />
            <h1 onClick={this.setMediaFilter.bind('video')}>Video</h1>
            <div className='inkblot_container_inner'>
              <video data-depth='50' id='myVideo'>
                <source src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/ink4.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
        {visModal}
      </div>
    )
  }
}
