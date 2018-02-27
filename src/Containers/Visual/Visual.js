import React, { Component } from "react";
import { Sidebar, Segment, Card, Menu, Header } from "semantic-ui-react";
import AppStore from "../../Flux/Store/AppStore";


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
  componentWillMount() {
    const { photography, videos } = AppStore.data;
    const { media } = photography.fields;
    this.setState({
      photos: media
    })
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
                      <img src={media[2].fields.image.fields.file.url} />
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
