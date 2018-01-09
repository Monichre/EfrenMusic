import React, { Component } from 'react'
import { Stereo } from '../Partials/Stereo'
import Player from '../Partials/Player'
import { Card, Icon, Image, Grid, Container, Rail, Segment, Sticky, Checkbox } from 'semantic-ui-react'
import './flatback.css'

export default class Albums extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeAlbum: {},
            showPlayer: false
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
                <section id="AlbumGallery">
                    <Grid className="timeline">
                        {this.props.data.albums.map((album, i) => {
                            if (i % 2 === 0) {
                                return (
                                    <Grid.Row>
                                        <div className="timeline-icon">
                                            <img src="/img/radio.svg" alt="" />
                                        </div>
                                        <Grid.Column floated='left' width={5}>
                                            <Card className="album_card" onClick={_this.handleAlbumClick.bind(this, album)}>
                                                <Image src={album.fields.albumPhoto.fields.file.url} />
                                                <Card.Content>
                                                    <Card.Header>
                                                        {album.fields.albumTitle}
                                                    </Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>Joined in 2015</span>
                                                    </Card.Meta>
                                                    <Card.Description>
                                                        Matthew is a musician living in Nashville.
                                                        </Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <a><Icon name='user' />22 Friends</a>
                                                </Card.Content>
                                            </Card>
                                        </Grid.Column>
                                    </Grid.Row>
                                )
                            } else {
                                return (
                                    <Grid.Row>
                                        <div className="timeline-icon">
                                            <img src="/img/radio.svg" alt="" />
                                        </div>
                                        <Grid.Column floated='right' width={5}>
                                            <Card>
                                                <div id="flat-black-player-container">
                                                    <div id="list-screen" className="slide-in-top">

                                                        <div id="list-screen-header" className="hide-playlist">
                                                            <img id="up-arrow" src="img/up.svg" />
                                                            Hide Playlist
                                                        </div>

                                                        <div id="list">
                                                            {album.fields.songs.map((song) => (
                                                                <div className="song amplitude-song-container amplitude-play-pause" amplitude-song-index="0">
                                                                    <span className="song-number-now-playing">
                                                                        <span className="number">1</span>
                                                                        <img className="now-playing" src={album.fields.albumPhoto.fields.file.url} />
                                                                    </span>

                                                                    <div className="song-meta-container">
                                                                        <span className="song-name">{song.fields.title}</span>
                                                                    </div>

                                                                    <span className="song-duration">3:30</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        <div id="list-screen-footer">
                                                            <div id="list-screen-meta-container">
                                                                <span amplitude-song-info="name" amplitude-main-song-info="true" className="song-name"></span>

                                                                <div className="song-artist-album">
                                                                    <span amplitude-song-info="artist" amplitude-main-song-info="true"></span>
                                                                </div>
                                                            </div>
                                                            <div className="list-controls">
                                                                <div className="list-previous amplitude-prev"></div>
                                                                <div className="list-play-pause amplitude-play-pause" amplitude-main-play-pause="true"></div>
                                                                <div className="list-next amplitude-next"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="player-screen">
                                                        <div className="player-header down-header">
                                                            <img id="down" src="img/down.svg" />
                                                            Show Playlist
                                                    </div>
                                                        <div id="player-top">
                                                            <img amplitude-song-info="cover_art_url" amplitude-main-song-info="true" />
                                                        </div>
                                                        <div id="player-progress-bar-container">
                                                            <progress id="song-played-progress" className="amplitude-song-played-progress" amplitude-main-song-played-progress="true"></progress>
                                                            <progress id="song-buffered-progress" className="amplitude-buffered-progress" value="0"></progress>
                                                        </div>
                                                        <div id="player-middle">
                                                            <div id="time-container">
                                                                <span className="amplitude-current-time time-container" amplitude-main-current-time="true"></span>
                                                                <span className="amplitude-duration-time time-container" amplitude-main-duration-time="true"></span>
                                                            </div>
                                                            <div id="meta-container">
                                                                <span amplitude-song-info="name" amplitude-main-song-info="true" className="song-name"></span>

                                                                <div className="song-artist-album">
                                                                    <span amplitude-song-info="artist" amplitude-main-song-info="true"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="player-bottom">
                                                            <div id="control-container">

                                                                <div id="shuffle-container">
                                                                    <div className="amplitude-shuffle amplitude-shuffle-off" id="shuffle"></div>
                                                                </div>

                                                                <div id="prev-container">
                                                                    <div className="amplitude-prev" id="previous"></div>
                                                                </div>

                                                                <div id="play-pause-container">
                                                                    <div className="amplitude-play-pause" amplitude-main-play-pause="true" id="play-pause"></div>
                                                                </div>

                                                                <div id="next-container">
                                                                    <div className="amplitude-next" id="next"></div>
                                                                </div>

                                                                <div id="repeat-container">
                                                                    <div className="amplitude-repeat" id="repeat"></div>
                                                                </div>

                                                            </div>

                                                            <div id="volume-container">
                                                                <img src="img/volume.svg" /><input type="range" className="amplitude-volume-slider" step=".1" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Grid.Column>
                                    </Grid.Row>
                                    
                )
                            }
                        })}
                    </Grid>
                </section >
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

{/* 

                                            <Card className="album_card" onClick={_this.handleAlbumClick.bind(this, album)}>
                                                <Image src={album.fields.albumPhoto.fields.file.url} />
                                                <Card.Content>
                                                    <Card.Header>
                                                        {album.fields.albumTitle}
                                                    </Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>Joined in 2015</span>
                                                    </Card.Meta>
                                                    <Card.Description>
                                                        Matthew is a musician living in Nashville.
                                                        </Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <a><Icon name='user' />22 Friends</a>
                                                </Card.Content>
                                            </Card>
                                         */}