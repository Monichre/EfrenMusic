import React, { Component } from 'react'
import { Card, Icon, Image, Grid, Container, Rail, Segment, Sticky, Checkbox } from 'semantic-ui-react'
import './singleSong.css'
import Amplitude from 'amplitudejs'

export default class Songs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            songs: [],
            counter: 0
        }
    }

    componentDidMount() {
        const _this = this
        const counter = 0
        let amplitude_songs = this.props.songs.map((song) => {
            let _song = {
                "name": song.fields.title,
                "artist": "Pye Luis",
                "album": 'no album',
                "url": song.fields.audioFile.fields.file.url,
                "cover_art_url": song.fields.photo.fields.file.url
            }

            return _song
        })
        
        this.setState({
            songs: amplitude_songs[counter]
        })
        Amplitude.init({
            "bindings": {
                37: 'prev',
                39: 'next',
                32: 'play_pause'
              },
            'songs': [amplitude_songs[0]]
        })
    }

    render() {
        
        const _this = this
        const { songs } = this.props

        return (
            <section id="SongGallery">
                <Grid className="timeline">
                    {songs ? songs.map((song, i) => {
                        if (i % 2 === 0) {
                            return (
                                <Grid.Row>
                                    <div className="timeline-icon">
                                        <img src="/img/radio.svg" alt="" />
                                    </div>
                                    <Grid.Column floated='left' width={8}>
                                        <Card className="song_card">
                                            <div className="single-song-player" id="single-song-player">
                                                <img src={(song && song.fields) ? song.fields.photo.fields.file.url : null} amplitude-main-song-info="true"/>
                                                <div className="bottom-container">
                                                    <progress className="amplitude-song-played-progress" amplitude-main-song-played-progress="true" id="song-played-progress"></progress>

                                                    <div className="time-container">
                                                        <span className="current-time">
                                                            <span className="amplitude-current-minutes" amplitude-main-current-minutes="true"></span>:<span className="amplitude-current-seconds" amplitude-main-current-seconds="true"></span>
                                                        </span>
                                                        <span className="duration">
                                                            <span className="amplitude-duration-minutes" amplitude-main-duration-minutes="true"></span>:<span className="amplitude-duration-seconds" amplitude-main-duration-seconds="true"></span>
                                                        </span>
                                                    </div>

                                                    <div className="control-container">
                                                        <div className="amplitude-play-pause" amplitude-main-play-pause="true" id="play-pause"></div>
                                                        <div className="meta-container">
                                                            <span amplitude-song-info="name" amplitude-main-song-info="true" className="song-name">{song.fields.title}</span>
                                                            <span amplitude-song-info="artist" amplitude-main-song-info="true">{song.fields.collaborators}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                    <Grid.Column floated='right' width={8}>
                                        <Card>
                                            <div className="single-song-player" id="single-song-player">
                                                <img src={song.fields.photo.fields.file.url} />
                                                <div className="bottom-container">
                                                    <progress className="amplitude-song-played-progress" amplitude-main-song-played-progress="true" id="song-played-progress"></progress>

                                                    <div className="time-container">
                                                        <span className="current-time">
                                                            <span className="amplitude-current-minutes" amplitude-main-current-minutes="true"></span>:<span className="amplitude-current-seconds" amplitude-main-current-seconds="true"></span>
                                                        </span>
                                                        <span className="duration">
                                                            <span className="amplitude-duration-minutes" amplitude-main-duration-minutes="true"></span>:<span className="amplitude-duration-seconds" amplitude-main-duration-seconds="true"></span>
                                                        </span>
                                                    </div>

                                                    <div className="control-container">
                                                        <div className="amplitude-play-pause" amplitude-main-play-pause="true" id="play-pause"></div>
                                                        <div className="meta-container">
                                                            <span amplitude-song-info="name" amplitude-main-song-info="true" className="song-name">{song.fields.title}</span>
                                                            <span amplitude-song-info="artist" amplitude-main-song-info="true">{song.fields.collaborators}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </Grid.Column>
                                </Grid.Row>
                            )
                        }
                    }) : null}
                </Grid>
            </section >
        )
    }

}
