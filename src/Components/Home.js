import React, { Component } from 'react'
import { Header } from './Partials/Header'
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react'
import {ParticlesBackground} from './Partials/Particles'
import {CONSTANTS} from '../Constants'
const { changeFullpageSlide, changeHorizontalSlide } = Fullpage

export default class Home extends Component {

    componentDidMount() {

    }

   
    render() {

        const data = this.props.data
        const fullPageOptions = {
            scrollSpeed: 500,
            hideScrollBars: true,
            breakpoint: 200
        }
        const horizontalSliderProps = {
            name: 'horizontalSlider1', 
            infinite: true, 
            breakpoint: 200
          }
        const horizontal_slides = data.sections.map((section, i) => (
            <Slide className="slide" data-anchor={`slide${i + 1}`}>
                {CONSTANTS.renderProperComponent(section, data)}
            </Slide>
        ))

        horizontalSliderProps.slides = horizontal_slides
        const full_page_slides = [ <HorizontalSlider {...horizontalSliderProps} />]
        fullPageOptions.slides = full_page_slides

        

        
        return (
            <div id="wrapper" className="animsition">
                <Header data={data} />
                <div id="inner">
                    <section className="behind-header">
                            <div id="home-slider" className="">
                                <ParticlesBackground />
                                <Fullpage {...fullPageOptions} />
                            </div>
                    </section>
                </div>
            </div>

        )
    }
}