import React, { Component } from 'react'
import Photography from './Photography'
import Videos from './Videos'
import AppStore from '../../Store/AppStore'
import { Modal } from '../../Partials/Modal'

export default class Visual extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showModal: false,
      activeModal: ''
    }
    this.closeModal = this.closeModal.bind(this)
  }
  setMediaFilter (str) {
    console.log(str)
    this.setState({
      showModal: true,
      activeModal: str
    })
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
  closeModal () {
    this.setState({ showModal: false })
  }

  render () {
    const { showModal, activeModal } = this.state
    const { photography, videos } = AppStore.data
    console.log(AppStore.data)

    let visModal

    if (this.props.horizontalActive === 2) {
      this.launchInkBlotMenu()
    }

    if (showModal && activeModal === 'video') {
      visModal = (<Modal>
        <Videos videos={videos} closeModal={this.closeModal} />
      </Modal>)
    } else if (showModal && activeModal === 'photography') {
      visModal = (<Modal>
        <Photography photos={photography.fields.media} closeModal={this.closeModal} />
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
            <h1 onClick={this.setMediaFilter.bind(this, 'photography')}>Photography</h1> <br />
            <h1 onClick={this.setMediaFilter.bind(this, 'video')}>Video</h1>
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
