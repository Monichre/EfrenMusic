import React, { Component } from 'react'
import { Header } from './Partials/Header'
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react'
import { ParticlesBackground } from './Partials/Particles'
import { CONSTANTS } from '../Constants'
const { changeFullpageSlide, changeHorizontalSlide } = Fullpage

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: {
                Fullpage: 0,
                horizontalSlider1: 0
            }
        }
        this.onSlideChangeStart = this.onSlideChangeStart.bind(this)
        this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this)
    }

    onSlideChangeStart(name, props, state, newState) {
        console.log(name)
        console.log(props)
        console.log(state)
        console.log(newState)
    }

    onSlideChangeEnd(name, props, state, newState) {


        const oldActive = this.state.active;
        const sliderState = {
            [name]: newState.activeSlide
        };

        const updatedState = Object.assign(oldActive, sliderState);
        this.setState(updatedState);
    }

    render() {

        const data = this.props.data
        const { active } = this.state;

        const currentActive = active.Fullpage;
        const prevSlide = changeFullpageSlide.bind(null, currentActive - 1);
        const nextSlide = changeFullpageSlide.bind(null, currentActive + 1);
        const goToTop = changeFullpageSlide.bind(null, 0);
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

        const horizontalSliderName = horizontalSliderProps.name;
        const horizontalActive = this.state.active[horizontalSliderName];

        const prevHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive - 1);
        const nextHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive + 1);
        const horizontal_slides = data.sections.map((section, i) => (
            <Slide className="slide" data-anchor={`slide${i + 1}`}>
                {CONSTANTS.renderProperComponent(section, data, horizontalActive)}
            </Slide>
        ))

        horizontalSliderProps.slides = horizontal_slides
        const full_page_slides = [<HorizontalSlider  {...horizontalSliderProps} />]
        fullPageOptions.slides = full_page_slides







        return (
            <div id="wrapper" className="animsition">
                <Header data={data} />
                <div id="inner">
                    <section className="behind-header">
                        <div id="home-slider" className="">
                            <ParticlesBackground />
                            <Fullpage {...fullPageOptions} onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} />
                        </div>
                    </section>
                </div>
            </div>

        )
    }
}