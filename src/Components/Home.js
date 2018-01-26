import React, { Component } from 'react'
import { Header } from './Partials/Header'
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react'
import { ParticlesBackground } from './Partials/Particles'
import { CONSTANTS } from '../Constants'
import AppStore from '../Store/AppStore'
import { Modal } from './Partials/Modal'
import Photography from './Partials/Photography'

export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      active: {
        Fullpage: 0,
        horizontalSlider1: 0,
        slideIsChanging: false,
        showModal: false
      }
    }
    this.onSlideChangeStart = this.onSlideChangeStart.bind(this)
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this)
    this.handleModalDisplay = this.handleModalDisplay.bind(this)
    this.closeModalDisplay = this.closeModalDisplay.bind(this)
  }

  onSlideChangeStart (name, props, state, newState) {
    this.setState({
      slideIsChanging: true
    })
  }

  onSlideChangeEnd (name, props, state, newState) {
    const oldActive = this.state.active
    const sliderState = {
      [name]: newState.activeSlide
    }
    const updatedState = Object.assign(oldActive, sliderState)

    this.setState(updatedState)
  }
  handleModalDisplay () {
    this.setState({
      showModal: true
    })
  }
  closeModalDisplay () {
    this.setState({
      showModal: false
    })
  }
  render () {
    const { data } = this.props
    const { photography } = AppStore.data
    const { active } = this.state
    const fullPageOptions = {
      scrollSpeed: 500,
      hideScrollBars: true,
      breakpoint: 200
    }
    const horizontalSliderProps = {
      name: 'horizontalSlider1',
      infinite: true,
      breakpoint: 200,
      activeSlide: 0
    }
    const horizontalSliderName = horizontalSliderProps.name
    const horizontalActive = this.state.active[horizontalSliderName]
    const { slideIsChanging } = this.state
    const horizontalSlides = data.sections.map((section, i) => (
      <Slide className='slide' data-anchor={`slide${i + 1}`}>
        {CONSTANTS.renderProperComponent(section, data, horizontalActive, slideIsChanging)}
      </Slide>
    ))
    horizontalSliderProps.slides = horizontalSlides
    const fullPageSlides = [<HorizontalSlider {...horizontalSliderProps} />]
    fullPageOptions.slides = fullPageSlides

    let visModal
    if (this.state.showModal) {
      visModal = (<Modal>
        <Photography photos={photography.fields.media} closePhotography={this.closeModalDisplay} />
      </Modal>)
    }

    return (
      <div id='wrapper' className='animsition'>
        <Header data={data} showModal={this.handleModalDisplay} />
        <div id='inner'>
          <section className='behind-header'>
            <div id='home-slider' className=''>
              <ParticlesBackground />
              {visModal}
              <Fullpage {...fullPageOptions} onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} />
            </div>
          </section>
        </div>
      </div>

    )
  }
}
