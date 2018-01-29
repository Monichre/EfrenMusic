import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import { QuickLoader } from '../../Partials/QuickLoader'

export default class Photography extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showLoader: true,
      currentImage: 0
    }
    this.closeSlider = this.closeSlider.bind(this)
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }

  closeSlider () {
    this.props.closeModal()
  }
  openLightbox (event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    })
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }
  handleLoad () {
    const _this = this
    setTimeout(() => {
      _this.setState({
        showLoader: false
      })
    }, 5000)
  }

  render () {
    const Close = (props) => <div onClick={props.onClick} className='button_close'><img src='/img/x.svg' alt='' /></div>
    const wDimensions = [2, 3, 4, 5]
    const hDimensions = [2, 3]
    const { photos } = this.props

    let photoSet = []
    let Loader = this.state.showLoader ? <QuickLoader /> : null

    photos.forEach((photo, i) => {
      let height = hDimensions[Math.floor(Math.random() * hDimensions.length)]
      let width = wDimensions[Math.floor(Math.random() * wDimensions.length)]
      photoSet.push({
        src: photo.fields.image.fields.file.url,
        width: width,
        height: height,
        alt: photo.fields.title
      })
    })
    if (this.state.showLoader) {
      this.handleLoad()
    }

    return (
      <div id='Photography'>
        {Loader}
        <Close onClick={this.closeSlider} />
        <Gallery photos={photoSet} onClick={this.openLightbox} />
        <Lightbox images={photoSet}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen} />
      </div>
    )
  }
}
