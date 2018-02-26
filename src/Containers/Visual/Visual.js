import React, { Component } from "react";
import Photography from "./Photography";
import { Sidebar, Segment, Card, Menu, Header } from "semantic-ui-react";
import Videos from "./Videos";
import AppStore from "../../Flux/Store/AppStore";
import { Modal } from "../../Partials/Modal";

export default class Visual extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      activeModal: "",
      photographyVis: false,
      videoVis: false,
      firstInkRender: true
    };
    this.closeModal = this.closeModal.bind(this);
  }
  togglePhotos() {
    this.setState({ photographyVis: !this.state.photographyVis });
  }
  toggleVids() {
    this.setState({ videoVis: !this.state.videoVis });
  }
  setMediaFilter(str) {
    console.log(str);
    this.setState({
      showModal: true,
      activeModal: str
    });
  }
  launchInkBlotMenu() {
    const vid = document.getElementById("myVideo");
    const _this = this;

    const playVid = () => {
      vid.play();
    };
    setTimeout(() => {
      playVid();
    }, 800);
    setTimeout(() => {
      document
        .querySelectorAll(".inkblot_container h1")
        .forEach(elem => (elem.style.opacity = 1));
      document.querySelector(".inkblot_container_inner").style.opacity = 1;
      _this.setState({ firstInkRender: false });
    }, 1700);
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal, activeModal, firstInkRender } = this.state;
    const { photography, videos } = AppStore.data;
    const { photographyVis, videoVis } = this.state;
    console.log(AppStore.data);

    let visModal;

    if (this.props.horizontalActive === 2 && firstInkRender) {
      this.launchInkBlotMenu();
    }

    if (showModal && activeModal === "video") {
      visModal = (
        <Modal>
          <Videos videos={videos} closeModal={this.closeModal} />
        </Modal>
      );
    } else if (showModal && activeModal === "photography") {
      visModal = (
        <Modal>
          <Photography
            photos={photography.fields.media}
            closeModal={this.closeModal}
          />
        </Modal>
      );
    }
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          id="video-menu"
          as={Menu}
          animation="scale down"
          direction="bottom"
          visible={videoVis}
          inverted
        >
          {videos.map(video => (
            <Menu.Item name={video.fields.title}>
              <Card className="video_card">
                <video autoPlay={false}>
                  <source
                    src={video.fields.link.fields.file.url}
                    type="video/mp4"
                  />
                </video>
              </Card>
            </Menu.Item>
          ))}
        </Sidebar>
        <Sidebar.Pusher>
          <div className="page" id="Visual">
            {visModal}
            <div className="page-content">
              <div className="page-content__inner">
                <div className="page-title">
                  <h1 className="stripe animatedText">
                    {this.props.section.fields.sectionTitle}
                  </h1>
                  <div className="inkblot_container">
                    <h1 onClick={this.setMediaFilter.bind(this, "photography")}>
                      Photography
                    </h1>
                    <br />
                    <h1 onClick={this.toggleVids.bind(this)}>Video</h1>
                    <div className="inkblot_container_inner">
                      <video data-depth="50" id="myVideo">
                        <source
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/ink4.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
