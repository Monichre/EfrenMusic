import React, { Component } from 'react'
import Player from '../Partials/Player'


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
        document.querySelector('body').classList.add('js')

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
    playThatSong() {
        // const arm = document.querySelector('.player__element.player__element--tonearm')
        // console.log(arm)
        
		
		// dynamics.animate(arm, {
		// 	rotateZ : 40
		// },{
		// 	duration: 2000,
		// 	type: dynamics.spring,
		// 	frequency: 200,
		// 	friction: 400
		// });
        // this.setState({
        //     activeSongIs_: 'PLAYING'
        // })
    }
    stopSong() {

        // const arm = document.querySelector('.player__element.player__element--tonearm')
 		
		// dynamics.animate(arm, {
		// 	rotateZ : -20
		// },{
		// 	duration: 2000,
		// 	type: dynamics.spring,
		// 	frequency: 200,
		// 	friction: 400
		// });
        // this.setState({
        //     activeSongIs_: 'STOPPED'
        // })
    }
    pauseSong() {
        this.setState({
            activeSongIs_: 'PAUSED'
        })
    }
    nextSong() {
        this.setState({
            counter: this.state.counter += 1
        })
    }
    previousSong() {
        this.setState({
            counter: this.state.counter -= 1
        })
    }
    handleSongLoading(e) {
        // console.log(e)
    }
    handleSongPlaying(e) {
        // console.log(e)
    }
    render() {

        return (
            <div className="AlbumGallery">
                  <div className="view view--grid view--current">
                        <ul className="album-grid grid--loaded">
                            {this.props.albums.map((album, i) => (
                                <li className="grid__item">
                                    <Player album={album} />
                                </li>
                            ))}
                        </ul>

                    </div>
            </div>
        )
    }
}
