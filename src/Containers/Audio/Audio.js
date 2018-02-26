import React, { Component } from "react";
import { Sidebar, Segment, Menu } from "semantic-ui-react";
import ReactDOM from "react-dom";
import Songs from "./Songs";

class SongsModal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      sideBarVisible: false
    };
  }

  toggleVisibility() {
    this.setState({ sideBarVisible: !this.state.sideBarVisible });
  }
  render() {
    const { songs } = this.props.data;
    const { sideBarVisible } = this.state;

    return (
      <div className="page">
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            id="audio-sidebar"
            as={Menu}
            animation="overlay"
            width="wide"
            direction="right"
            visible={sideBarVisible}
            icon="labeled"
            vertical
            inverted
          >
            <Songs songs={songs} />
          </Sidebar>
          <Sidebar.Pusher>
            <div className="page-content">
              <div className="page-content__inner">
                <div className="page-title">
                  <h1 className="stripe animatedText">
                    {this.props.section.fields.sectionTitle}
                  </h1>
                </div>
                <div
                  className="sub-title"
                  onClick={this.toggleVisibility.bind(this)}
                >
                  {this.props.section.fields.contentTitle}
                </div>
              </div>
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
