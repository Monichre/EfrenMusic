import React, { Component } from 'react'
import Amplitude from 'amplitudejs'

export default class Player extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            songs: []
        }
    }
    componentDidMount() {
        const _this = this
        let amplitude_songs = this.props.album.fields.songs.map((song) => {
            let _song = {
                "name": song.fields.title,
				"artist": "Pye Luis",
				"album": _this.props.album.fields.albumTitle,
				"url": song.fields.audioFile.fields.file.url,
				"cover_art_url": _this.props.album.fields.albumPhoto.fields.file.url
            }

            return _song
        })
        this.setState({
            songs: amplitude_songs
        })
        Amplitude.init({
            'songs': amplitude_songs
        })
    }
    render() {
        const songs = this.props.album.fields.songs
        
        return (
            <div className="row">
                <div className="large-8 medium-10 small-11 large-centered medium-centered small-centered columns" id="amplitude-player">
                    <div className="row">
                        <div className="large-6 medium-6 small-12 columns" id="amplitude-left">
                            <img amplitude-song-info="cover_art_url" amplitude-main-song-info="true" />
                            <div id="player-left-bottom">
                                <div id="time-container">
                                    <span className="current-time">
                                        <span className="amplitude-current-minutes" amplitude-main-current-minutes="true"></span>:<span className="amplitude-current-seconds" amplitude-main-current-seconds="true"></span>
                                    </span>
                                    <input type="range" className="amplitude-song-slider" amplitude-main-song-slider="true" step=".1" />
                                    <span className="duration">
                                        <span className="amplitude-duration-minutes" amplitude-main-duration-minutes="true"></span>:<span className="amplitude-duration-seconds" amplitude-main-duration-seconds="true"></span>
                                    </span>
                                </div>

                                <div id="control-container">
                                    <div id="repeat-container">
                                        <div className="amplitude-repeat" id="repeat"></div>
                                    </div>

                                    <div id="central-control-container">
                                        <div id="central-controls">
                                            <div className="amplitude-prev" id="previous"></div>
                                            <div className="amplitude-play-pause" amplitude-main-play-pause="true" id="play-pause"></div>
                                            <div className="amplitude-next" id="next"></div>
                                        </div>
                                    </div>

                                    <div id="shuffle-container">
                                        <div className="amplitude-shuffle amplitude-shuffle-off" id="shuffle"></div>
                                    </div>
                                </div>

                                <div id="meta-container">
                                    <span amplitude-song-info="name" amplitude-main-song-info="true" className="song-name"></span>

                                    <div className="song-artist-album">
                                        <span amplitude-song-info="artist" amplitude-main-song-info="true"></span>
                                        <span amplitude-song-info="album" amplitude-main-song-info="true"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="large-6 medium-6 small-12 columns" id="amplitude-right">
                            {songs.map((song) => (
                                <div className="song amplitude-song-container amplitude-play-pause" amplitude-song-index="0">
                                    <div className="song-now-playing-icon-container">
                                        <div className="play-button-container">

                                        </div>
                                        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            
                                            <g id="05.100.00-OpenSource-Amplitude" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="HD_05.100.00-521Website_OpenSource-Amplitude" transform="translate(-729.000000, -384.000000)">
                                                    <g id="Lead-in">
                                                        <g id="Player" transform="translate(368.000000, 359.000000)">
                                                            <g id="Playlist" transform="translate(352.000000, 5.000000)">
                                                                <g id="Song-Item" transform="translate(1.000000, 0.000000)">
                                                                    <g id="Now-Playing">
                                                                        <g transform="translate(8.000000, 20.000000)">
                                                                            <circle id="Oval-1" fill="#00A0FF" cx="10" cy="10" r="10"></circle>
                                                                            <path d="M8.90625,12.134375 C8.80328125,12.134375 8.70875,12.1 8.63140625,12.04375 L8.630625,12.0453125 L7.03515625,10.884375 L5.46875,10.884375 C5.21,10.884375 5,10.675 5,10.415625 L5,8.853125 C5,8.5953125 5.20921875,8.3859375 5.46765625,8.384375 L5.46765625,8.3828125 L7.0215625,8.3828125 L8.60953125,7.084375 L8.61078125,7.0859375 C8.69171875,7.01875 8.79359375,6.978125 8.90625,6.978125 C9.16515625,6.978125 9.37515625,7.1875 9.37515625,7.446875 L9.37515625,11.665625 C9.37515625,11.925 9.16515625,12.134375 8.90625,12.134375 L8.90625,12.134375 Z M10.7660937,11.8328125 L10.32125,11.3890625 C10.7060937,10.9078125 10.9375,10.2984375 10.9375,9.634375 C10.9375,8.9703125 10.7060937,8.3609375 10.32125,7.8796875 L10.7660937,7.4359375 C11.263125,8.03125 11.5625,8.796875 11.5625,9.634375 C11.5625,10.4703125 11.263125,11.2375 10.7660937,11.8328125 L10.7660937,11.8328125 Z M11.9845312,13.0515625 L11.5395312,12.60625 C12.233125,11.8109375 12.65625,10.7734375 12.65625,9.634375 C12.65625,8.4953125 12.233125,7.4578125 11.5395312,6.6625 L11.9845312,6.2171875 C12.7909375,7.1265625 13.28125,8.3234375 13.28125,9.634375 C13.28125,10.9453125 12.7909375,12.1421875 11.9845312,13.0515625 L11.9845312,13.0515625 Z M13.2021875,14.26875 L12.7596875,13.8265625 C13.7634375,12.71875 14.375,11.2484375 14.375,9.634375 C14.375,8.0203125 13.7634375,6.55 12.7596875,5.4421875 L13.2021875,5 C14.31875,6.221875 15,7.8484375 15,9.634375 C15,11.4203125 14.31875,13.046875 13.2021875,14.26875 L13.2021875,14.26875 Z" id="Fill-156" fill="#FFFFFF"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="song-meta-data">
                                        <span className="song-title">{song.fields.title}</span>
                                        <span className="song-artist">Pye Luis</span>
                                    </div>
                                    <a className="bandcamp-link" target="_blank">
                                        <img className="bandcamp-grey" src="img/bandcamp-grey.svg" />
                                        <img className="bandcamp-white" src="img/bandcamp-white.svg" />
                                    </a>
                                    <span className="song-duration">3:30</span>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}