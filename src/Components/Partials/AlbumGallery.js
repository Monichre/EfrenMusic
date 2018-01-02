import React, { Component } from 'react'
import Player from '../Partials/Player'

const CardLeft = (props) => (
<div className="large-6 medium-6 small-12 columns timeline-content left">
    <div className="news-card-tag">
        <span className="label"><p className="timeline-content-date">2010</p></span>
    </div>
    <div className="card news-card">
        <img src="https://i.imgur.com/6jMbuU1.jpg"/>
        <div className="card-section">
            <div className="news-card-date">Sunday, 16th April</div>
            <article className="news-card-article">
            <h4 className="news-card-title"><a href="#">5 Features To Watch Out For in Angular v4</a></h4>
            <p className="news-card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae facere, ipsam quae sit, eaque perferendis commodi!...</p>
            </article>
            <div className="news-card-author">
                <div className="news-card-author-image">
                    <img src="https://i.imgur.com/lAMD2kS.jpg" alt="user"/>
                </div>
                <div className="news-card-author-name">
                    By <a href="#">Harry Manchanda</a>
                </div>
            </div>
        </div>
    </div>
</div>
)
const CardRight = (props) => (
<div className="large-6 medium-6 small-12 columns timeline-content right">
    <div className="news-card-tag">
        <span className="label"><p className="timeline-content-date">2010</p></span>
    </div>
    <div className="card news-card">
        <img src="https://i.imgur.com/6jMbuU1.jpg"/>
        <div className="card-section">
            <div className="news-card-date">Sunday, 16th April</div>
            <article className="news-card-article">
            <h4 className="news-card-title"><a href="#">5 Features To Watch Out For in Angular v4</a></h4>
            <p className="news-card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae facere, ipsam quae sit, eaque perferendis commodi!...</p>
            </article>
            <div className="news-card-author">
                <div className="news-card-author-image">
                    <img src="https://i.imgur.com/lAMD2kS.jpg" alt="user"/>
                </div>
                <div className="news-card-author-name">
                    By <a href="#">Harry Manchanda</a>
                </div>
            </div>
        </div>
    </div>
</div>
)



export default class AlbumGallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
            activeAlbum: null,
            activeSong: null,
            activeAlbumSongs: [],
            activeIndex: null,
            viewSingle: false,
            playTheRecord: false,
            activeSongIs_: 'STOPPED'
        }
    }

	loadTurntableAssets(callback) {
        
	}
    componentDidMount() {

    }
    setActiveAlbum(album, index) {
        console.log(album)
        document.querySelector('body').classNameList.add('js')

        this.setState({
            activeAlbum: { ...album },
            activeIndex: index,
            viewSingle: true,
            activeAlbumSongs: album.fields.songs
        })
    }
    closeActiveAlbum(e) {
        e.preventDefault()
        this.setState({
            viewSingle: false
        })
    }
    playThatRecord() {
        
        this.setState({
            viewSingle: false,
            playTheRecord: true
        })
    }
  
    render() {
{/* <Player album={album} /> */}
        return (
            <div className="AlbumGallery">
                <div className="timeline">
                    {this.props.albums.map((album, i) => {
                        if (i % 2 === 0) {
                            return (
                                <div className="timeline-item">
                                    <div className="timeline-icon">
                                        <img src="/img/radio.svg" alt=""/>
                                    </div>
                                    <CardRight />
                                </div>
                            )
                        } else {
                            <CardLeft />
                        }
                    })}
                </div>
            </div>
        )
    }
}
