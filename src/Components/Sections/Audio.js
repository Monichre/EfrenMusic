import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Stereo } from '../Partials/Stereo'
import Player from '../Partials/Player'
import Songs from '../Partials/Songs'

import { Card, Icon, Image, Grid, Container, Rail, Segment, Sticky, Checkbox } from 'semantic-ui-react'



class SongsModal extends React.Component {
  constructor(props) {
    super(props)

    this.el = document.createElement('div')
    
  }
  componentWillMount() {
   
  }
  componentDidMount() {
    document.body.appendChild(this.el);
    
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
      
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}



export default class Albums extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeAlbum: {},
            showPlayer: false,
            showModal: false
        }
    }

    handleAlbumClick(album) {
        console.log(album)
        this.setState({
            activeAlbum: album,
            showPlayer: true
        })
    }


    render() {
        const _this = this
        let the_player
        if (this.state.showPlayer) {
            the_player = <Player album={this.state.activeAlbum} />
        }
        const { showPlayer } = this.state
        const { songs } = this.props.data
        console.log(songs)
        

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
                                {the_player}
                            </div>
                        </div>
                    </div>
                </div>
                <SongsModal>
                    <Songs songs={songs} />
                </SongsModal>
              
            <Rail position='left'>
                <Sticky active={showPlayer}>
                    <Card>
                        {the_player}
                    </Card>
                </Sticky>
            </Rail>
            </div >
        )
    }
}

