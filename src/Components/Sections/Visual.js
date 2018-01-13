import React, { Component } from 'react'

export default class Videos extends Component {

    setMediaFilter(str) {

    }
    launchInkBlotMenu() {

        const vid = document.getElementById("myVideo")
        const playVid = () => {
            vid.play();
        }

        setTimeout(function () {
            playVid()
        }, 800)

        setTimeout(function () {
            document.querySelectorAll('.inkblot_container h1').forEach((elem) => elem.style.opacity = 1)
            document.querySelector('.inkblot_container_inner').style.opacity = 1
        }, 1700)

    }

    render() {
        console.log(this.props)
        if (this.props.horizontalActive === 2) {
            this.launchInkBlotMenu()
        }
        return (
            <div className="hero fs">
                <div className="bg faded"></div>
                <div className="vcenter">
                    <div className="container">
                        <div className="grid">
                            <div className="col-1">2017</div>
                            <div className="col-7">
                                <div className="sub-label">January</div>
                                <a className="project-link">
                                    <h1 className="stripe animatedText">{this.props.section.fields.sectionTitle}</h1>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='inkblot_container'>
                        <h1 onClick={this.setMediaFilter.bind(this, 'photography')}>Photography</h1> <br />
                        <h1 onClick={this.setMediaFilter.bind(this, 'video')}>Video</h1>
                        <div className='inkblot_container_inner'>
                            <video data-depth='50' id='myVideo'>
                                <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/ink4.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}