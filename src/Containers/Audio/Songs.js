import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import SinglePlayer from '../Players/SinglePlayer'
import Amplitude from 'amplitudejs'
import {Menu} from "semantic-ui-react";

export default class Songs extends Component {
  constructor (props) {
    super(props)

    this.state = {
      songs: [],
      isPlaying: false
    }
  }

  componentDidMount () {
    let amplitudeSongs = this.props.songs.map((song) => {
      let _song = {
        'name': song.fields.title,
        'artist': 'Pye Luis',
        'album': 'no album',
        'url': song.fields.audioFile.fields.file.url,
        'cover_art_url': song.fields.photo.fields.file.url
      }

      return _song
    })
    this.setState({
      songs: amplitudeSongs
    })

    Amplitude.init({
      'songs': [],
      'autoplay': false
    })
  }

  render () {
    const { songs } = this.state
    return songs ? songs.map((song, i) => <Menu.Item name={song.name}><SinglePlayer song={song} song_index={i} /> </Menu.Item>) : null
  }
}
