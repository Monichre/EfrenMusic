import React, { Component } from 'react'
import Amplitude from 'amplitudejs'
import { Card, Icon, Image } from 'semantic-ui-react'

import '../../css/singleSong.css'


export default class SinglePlayer extends Component {
    
    componentDidMount() {
        const player = document.querySelector('.song_card .player')
        Amplitude.addSong(this.props.song)
        Amplitude.bindNewElements(player)
    }
    
   
    render() {
   
        
        return (
            <Card className="song_card">
                <div className="player">
                    <img src={this.props.song.cover_art_url} className="album-art" />
                    <div className="meta-container">
                        <div className="song-title">{this.props.song.name}</div>
                        <div className="song-artist">{this.props.song.artist}</div>
                        {/* <div className="time-container">
                            <div className="current-time">
                                <span className="amplitude-current-minutes" amplitude-song-index={this.props.song_index}></span><span className="amplitude-current-seconds" amplitude-song-index={this.props.song_index}></span>
                            </div>

                            <div className="duration">
                                <span className="amplitude-duration-minutes" amplitude-song-index={this.props.song_index}></span><span className="amplitude-duration-seconds" amplitude-song-index={this.props.song_index}></span>
                            </div>
                        </div> */}
                        <progress className="amplitude-song-played-progress" amplitude-song-index={this.props.song_index} id={`song-played-progress-${this.props.song_index}`}></progress>
                        <div className="control-container">
                            <div className="amplitude-play" amplitude-song-index={this.props.song_index} >
                                <Image src="/img/play.svg" size='mini' />
                            </div>
                            <div className="amplitude-pause" amplitude-song-index={this.props.song_index} >
                                <Image src="/img/pause.svg" size='mini' />
                            </div>
                        </div>
                    </div>
                </div>
        
            </Card>
        )
    }
}



