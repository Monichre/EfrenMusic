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
                                <div className="col-1 date">2017</div>
                                <div className="col-7">
                                    <div className="project-link">
                                        <h1 className="stripe animatedText">{this.props.section.fields.sectionTitle}</h1>
                                    </div>
                                    <div className="sub-label">{this.props.section.fields.contentTitle}</div>
                                    <Tape />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}