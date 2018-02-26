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
  }
  togglePhotos() {
    this.setState({ photographyVis: !this.state.photographyVis });
  }
  toggleVids() {
    this.setState({ videoVis: !this.state.videoVis });
  }

  render() {
    const { showModal, activeModal, firstInkRender } = this.state;
    const { photography, videos } = AppStore.data;
    const { photographyVis, videoVis } = this.state;
    const { media } = photography.fields;
    const firstPhoto = media[0].fields.image.fields.file.url;
    const secondPhoto = media[1].fields.image.fields.file.url;
    const thirdPhoto = media[2].fields.image.fields.file.url;

    return (
      <Sidebar.Pushable as={Segment}>
         <Sidebar
          as={Menu}
          animation="scale down"
          direction="top"
          visible={photographyVis}
          inverted
        >
          {media.map(photo => (
            <Menu.Item name={photo.fields.title}>
              <Card className="photo_card">
                <img src={photo.fields.image.fields.file.url}/>
              </Card>
            </Menu.Item>
          ))}
        </Sidebar>
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
              <Header>
                <h3>{video.fields.title}</h3>
              </Header>
              <Card className="video_card">
                <video autoPlay={false} controls>
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
            <div className="page-content">
              <div className="page-content__inner">
                <div className="content">
                  <div className="page-title">
                    <h1 className="stripe animatedText">
                      {this.props.section.fields.sectionTitle}
                    </h1>
                  </div>
                </div>
                <div className="media">
                  <h1 onClick={this.togglePhotos.bind(this)}>Photography</h1>
                  <h1 onClick={this.toggleVids.bind(this)}>Video</h1>
                  <div className="picture">
                    <img src={thirdPhoto} />
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
