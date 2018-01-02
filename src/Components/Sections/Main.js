import React, { Component } from 'react'
import Tape from '../Partials/Tape'

export default class Main extends Component {
    render() {
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
                                    <div className="sub-label">Pye Luis</div>
                                    <div className="sub-label">Official</div>
                                    <Tape />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}