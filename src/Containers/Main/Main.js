import React, { Component } from "react";
import Tape from "../../Components/Tape";

export default class Main extends Component {
  render() {
    return (
      <div className="page" id="Main">
        <div className="page-content">
          <div className="page-content__inner">
            <div className="content">
              <div className="page-title">
                <h1 className="stripe animatedText">
                  {this.props.section.fields.sectionTitle}
                </h1>
              </div>
              <div className="sub-title">
                {this.props.section.fields.contentTitle}
              </div>
            </div>
            <div className="media">
              <div className="tape">
                <Tape />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
