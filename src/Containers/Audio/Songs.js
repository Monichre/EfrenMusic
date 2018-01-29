import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import SinglePlayer from '../Players/SinglePlayer'
import Amplitude from 'amplitudejs'

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

    return (
      <section id='SongGallery'>
        <Grid className='timeline'>
          {songs ? songs.map((song, i) => {
            if (i % 2 === 0) {
              return (
                <Grid.Row>
                  <div className='timeline-icon'>
                    <img src='/img/radio.svg' alt='' />
                  </div>
                  <Grid.Column floated='left' width={6}>
                    <SinglePlayer song={song} song_index={i} />
                  </Grid.Column>
                </Grid.Row>
              )
            } else {
              return (
                <Grid.Row>
                  <div className='timeline-icon'>
                    <img src='/img/radio.svg' alt='' />
                  </div>
                  <Grid.Column floated='right' width={6}>
                    <SinglePlayer song={song} song_index={i} />
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
