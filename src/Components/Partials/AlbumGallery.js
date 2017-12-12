import React, { Component } from 'react'
import '../../AlbumGallery.css'
import classie from 'classie'
import dynamics from 'dynamics.js'


export default class AlbumGallery extends Component {
    constructor(props){
        super(props)

        this.state = {
            activeAlbum: null,
            activeIndex: null,
            viewSingle: false
        }
    }
    componentDidMount() {

        const body = document.querySelector('body')
        const scripts = []

        let script_1 = document.createElement('script')
        script_1.setAttribute('src', 'js/imagesloaded.pkgd.min.js')
        scripts.push(script_1)
        let script_2 = document.createElement('script')
        script_2.setAttribute('src', 'js/masonry.pkgd.min.js')
        scripts.push(script_2)
        let script_3 = document.createElement('script')
        script_3.setAttribute('src', 'js/classie.js')
        scripts.push(script_3)
        let script_4 = document.createElement('script')
        script_4.setAttribute('src', 'js/dynamics.min.js')
        scripts.push(script_4)
        let script_5 = document.createElement('script')
        script_5.setAttribute('src', 'js/abbey-load.js')
        scripts.push(script_5)

        scripts.forEach((script) => body.appendChild(script))

    }
    setActiveAlbum(album, index) {
        console.log(album)
        console.log(index)

        document.querySelector('body').classList.add('js')
        
        this.setState({
            activeAlbum: {...album},
            activeIndex: index,
            viewSingle: true
        })
    }
    closeActiveAlbum(e) {
        e.preventDefault()
        // document.querySelector('body').classList.remove('js')
        this.setState({
            viewSingle: false
        })
    }
    render() {
    
        let deco_expander_style

        if(this.state.viewSingle) {
            deco_expander_style = {
                opacity: 1,
                left: '334px',
                top: '300px',
                transform: 'matrix3d(1.5, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 1)'
            }
        }
        
      
     const body = document.querySelector('body')
        let script = document.createElement('div')
        script.setAttribute('src', 'js/main.js')
        body.appendChild(script)
        
        return (
            <div className="AlbumGallery">
                <svg className="hidden">
                    <defs>
                        <symbol id="icon-ir-acoustic" viewBox="0 0 30 30">
                            <path d="M13.3,14.5c-0.6,0-1.1,0.2-1.6,0.6c-0.4,0.4-0.6,1-0.6,1.6c0,0.6,0.2,1.1,0.6,1.6c0.4,0.4,1,0.6,1.6,0.6c0.6,0,1.1-0.2,1.6-0.6c0.4-0.4,0.6-1,0.6-1.6c0-0.6-0.2-1.1-0.6-1.6C14.5,14.7,13.9,14.5,13.3,14.5z M14.1,17.4c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8C14.4,17,14.3,17.2,14.1,17.4z" /><path d="M7.7,19.3c-0.2-0.2-0.6-0.2-0.8,0c-0.2,0.2-0.2,0.6,0,0.8l3,3c0.1,0.1,0.3,0.2,0.4,0.2c0.1,0,0.3-0.1,0.4-0.2c0.2-0.2,0.2-0.6,0-0.8L7.7,19.3z" /><path d="M26.8,6.4l0.3-0.3c0,0,0,0,0,0c0.4-0.4,0.4-1.1,0-1.5l-1.8-1.8c-0.2-0.2-0.5-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3c0,0,0,0,0,0l-0.3,0.3L23.4,3c-0.2-0.2-0.6-0.2-0.8,0c-0.2,0.2-0.2,0.6,0,0.8L22.9,4l-0.2,0.2L22.4,4c-0.2-0.2-0.6-0.2-0.8,0c-0.2,0.2-0.2,0.6,0,0.8L22,5.1l-0.2,0.3c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.1,0,0.2,0,0.3l-5.5,5.5c-0.8-0.5-1.6-0.7-2.4-0.7c0,0-0.1,0-0.1,0c-1.2,0-2.3,0.5-3.1,1.4c-0.4,0.4-0.7,1-0.9,1.6c-0.1,0.4-0.5,0.6-0.9,0.7c-1.2,0-3,0.3-4.2,1.6C3,17.7,2.4,19.3,2.5,21c0.1,1.5,0.9,3.1,2.2,4.4l0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c1.3,1.3,2.8,2,4.4,2.1c0.2,0,0.3,0,0.5,0c1.5,0,2.9-0.6,4.1-1.7c1.2-1.2,1.5-3,1.6-4.2c0-0.4,0.3-0.8,0.7-0.9c0.7-0.2,1.2-0.5,1.6-0.9c0.9-0.9,1.4-2,1.4-3.1c0-0.8-0.2-1.7-0.7-2.5l5.5-5.5c0.1,0,0.1,0,0.2,0c0.3,0,0.5-0.1,0.7-0.3L24.9,8l0.4,0.4c0.1,0.1,0.3,0.2,0.4,0.2c0.1,0,0.3-0.1,0.4-0.2c0.2-0.2,0.2-0.6,0-0.8l-0.3-0.3L26,7.1l0.3,0.3c0.1,0.1,0.3,0.2,0.4,0.2c0.1,0,0.3-0.1,0.4-0.2c0.2-0.2,0.2-0.6,0-0.8L26.8,6.4z M24.6,3.7l1.7,1.7l-2.5,2l-1.3-1.3L24.6,3.7z M17.7,16.6c0,0.9-0.4,1.7-1.1,2.4c-0.3,0.3-0.7,0.5-1.1,0.6c-0.8,0.2-1.4,1-1.5,1.9c0,1-0.3,2.5-1.2,3.4c-1,1-2.3,1.5-3.7,1.4c-1.3-0.1-2.6-0.8-3.7-1.8c-1.1-1.1-1.7-2.4-1.8-3.7C3.5,19.5,4,18.2,5,17.2c1-1,2.4-1.2,3.4-1.2c0.9,0,1.7-0.6,1.9-1.5c0.1-0.5,0.4-0.9,0.6-1.1c0.7-0.7,1.5-1.1,2.4-1.1c0,0,0.1,0,0.1,0c1,0,2,0.5,2.9,1.3C17.6,14.9,17.7,16.1,17.7,16.6z M17.2,12.8c-0.1-0.1-0.2-0.2-0.3-0.3l5.3-5.3l0.6,0.6l-5.3,5.3C17.4,13,17.3,12.9,17.2,12.8z" />
                        </symbol>
                        <symbol id="icon-ir-cathedral" viewBox="0 0 32 32">
                            <path d="M26.5,22.5c0-0.3-0.2-0.5-0.5-0.5v-4.2c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5h-0.5v-2.8c0-0.3-0.2-0.5-0.5-0.5V9.8c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5h-0.5V8.4c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5V6.1c0-0.6-0.4-1.1-0.9-1.3v-1c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5v1c-0.5,0.2-0.9,0.7-0.9,1.3v1.4c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5v0.5h-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5v3.8c-0.3,0-0.5,0.2-0.5,0.5v2.8l-0.5-0.2v-4c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5h0c-0.2-2.3-1.8-4.2-4-4.7V6.1c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5V3.7c0-0.6-0.4-1.1-0.9-1.3v-1c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5v1c-0.5,0.2-0.9,0.7-0.9,1.3v1.4c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5V7c-2.1,0.6-3.8,2.5-4,4.7h0c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5v4l-0.5,0.2h0v-2.8c0-0.3-0.2-0.5-0.5-0.5V9.8c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5H8.2V8.4c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5V6.1c0-0.6-0.4-1.1-0.9-1.3v-1c0-0.3-0.2-0.5-0.5-0.5S6.3,3.5,6.3,3.7v1C5.8,5,5.4,5.5,5.4,6.1v1.4C5.1,7.5,4.9,7.7,4.9,8c0,0.3,0.2,0.5,0.5,0.5v0.5H4.9c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5v3.8c-0.3,0-0.5,0.2-0.5,0.5v2.8H4c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5V22c-0.3,0-0.5,0.2-0.5,0.5S3.7,23,4,23v5.2c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5h22c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5V23C26.3,23,26.5,22.8,26.5,22.5z M25.1,22h-3.8v-4.2h3.8V22z M19.5,26.3c-0.3,0-0.5,0.2-0.5,0.5v1.4h-0.5V23h1.9v5.2h-0.5v-1.4C19.9,26.5,19.7,26.3,19.5,26.3z M10.5,26.3c-0.3,0-0.5,0.2-0.5,0.5v1.4H9.6V23h1.9v5.2H11v-1.4C11,26.5,10.8,26.3,10.5,26.3z M12.4,12.7v2.6L12,15.5v-2.8H12.4z M13.8,12.7v1.9l-0.5,0.2v-2.2H13.8z M15.2,12.7v1.5l0,0c-0.1-0.1-0.3-0.1-0.4,0l0,0v-1.5H15.2z M16.6,12.7v2.2l-0.5-0.2v-1.9H16.6z M18,12.7v2.8l-0.5-0.2v-2.6H18z M14.4,15.3c0,0,0.1,0,0.1-0.1l0.4-0.2l0.4,0.2c0,0,0.1,0.1,0.2,0.1l3.2,1.5h-7.5L14.4,15.3z M16.2,23.9h-2.3V23h2.3V23.9z M13.8,22v-4.2h2.3V22H13.8z M12.9,17.8V22h-0.5v-4.2H12.9z M17.1,17.8h0.5V22h-0.5V17.8z M9.6,17.8h1.9V22H11v-1.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5V22H9.6V17.8z M12.4,23h0.5v5.2h-0.5V23z M13.8,24.9h2.3v3.3h-2.3V24.9z M17.1,23h0.5v5.2h-0.5V23z M19.9,22v-1.9c0-0.3-0.2-0.5-0.5-0.5S19,19.9,19,20.2V22h-0.5v-4.2h1.9V22H19.9z M21.8,16.9v-2.3h0.1c0.2,0,0.4-0.1,0.4-0.3c0.1-0.4,0.5-0.6,0.9-0.6s0.8,0.3,0.9,0.6c0.1,0.2,0.2,0.3,0.4,0.3h0.1v2.3H21.8z M24.1,12.9c-0.1-0.1-0.3-0.1-0.5-0.2V9.8h0.5V12.9z M22.7,6.6h0.9v0.9h-0.9V6.6z M22.7,8.4h0.9v0.5h-0.9V8.4z M22.7,9.8v2.9c-0.2,0-0.3,0.1-0.5,0.2V9.8H22.7z M19,15.9v-3.3h0.5v3.5L19,15.9z M14.5,4.2h0.9v0.9h-0.9V4.2z M14.5,6.1h0.9v0.7c-0.2,0-0.3,0-0.5,0s-0.3,0-0.5,0V6.1z M15,7.7c2.3,0,4.2,1.7,4.4,4h-8.9C10.8,9.5,12.7,7.7,15,7.7z M10.5,12.7H11V16l-0.5,0.2V12.7z M7.7,12.9c-0.1-0.1-0.3-0.1-0.5-0.2V9.8h0.5V12.9z M6.3,6.6h0.9v0.9H6.3V6.6z M6.3,8.4h0.9v0.5H6.3V8.4z M6.3,9.8v2.9c-0.2,0-0.3,0.1-0.5,0.2V9.8H6.3z M5.4,14.5L5.4,14.5c0.3,0,0.5-0.1,0.5-0.3c0.1-0.4,0.5-0.6,0.9-0.6c0.4,0,0.8,0.3,0.9,0.6c0.1,0.2,0.2,0.3,0.4,0.3h0.1v2.3H5.4V14.5z M4.9,17.8h3.8V22H4.9V17.8z M4.9,23h3.8v5.2H4.9V23z M25.1,28.1h-3.8V23h3.8V28.1z" />
                            <path d="M6.8,18.3c-0.3,0-0.5,0.2-0.5,0.5v1.9c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-1.9C7.3,18.5,7,18.3,6.8,18.3z" />
                            <path d="M23.2,21.1c0.3,0,0.5-0.2,0.5-0.5v-1.9c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5v1.9C22.7,20.9,23,21.1,23.2,21.1z" />
                            <path d="M6.8,23.9c-0.3,0-0.5,0.2-0.5,0.5v1.9c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-1.9C7.3,24.1,7,23.9,6.8,23.9z" />
                            <path d="M23.2,26.7c0.3,0,0.5-0.2,0.5-0.5v-1.9c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5v1.9C22.7,26.5,23,26.7,23.2,26.7z" />
                            <path d="M6.8,14.1c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.1,0.2,0.1,0.3C6.5,15,6.7,15,6.8,15c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2-0.1-0.3C7,14.1,6.9,14.1,6.8,14.1z" />
                            <path d="M23.2,14.1c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0.1,0.3C23,15,23.1,15,23.2,15c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2-0.1-0.3C23.5,14.1,23.3,14.1,23.2,14.1z" />
                            <path d="M11,24.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5v0.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5V24.9z" />
                            <path d="M19.9,24.9c0-0.3-0.2-0.5-0.5-0.5S19,24.6,19,24.9v0.5c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5V24.9z" />
                        </symbol>
                        <symbol id="icon-ir-stadium" viewBox="0 0 32 32">
                            <path d="M28.8,9.3c-1.3,0-1-0.8-2.1-0.7l0,0l-0.2,0l0,1.8c-0.5-0.5-1.2-0.8-1.8-1.1c-1.5-0.8-3.2-1.2-4.9-1.5l0-0.9c0.8-0.7,1.6,0.3,2.1-0.7c-1.3,0-1-0.8-2.1-0.7l0,0l-0.2,0l0,2.3c-0.4-0.1-0.8-0.1-1.2-0.2c-2.3-0.3-4.7-0.2-7,0.1c-0.2,0-0.4,0.1-0.6,0.1l0-2.3l-0.2,0l0,0C9.2,5.3,9.5,6.1,8.2,6.1c0.6,1,1.3,0,2.1,0.7l0,0.9C8.4,8,6.5,8.6,4.8,9.5C4.4,9.8,4,10,3.6,10.4l0-1.8l-0.2,0l0,0C2.3,8.5,2.5,9.3,1.2,9.3c0.6,1,1.3,0,2.1,0.7l0,0.6c-0.8,0.7-1.4,1.7-1.4,2.8c0.1,1.3,0.8,2.3,1.8,3.1v1.8c-0.4-0.3-0.6-0.6-0.8-0.9c-0.1-0.2-0.2-0.3-0.2-0.5c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.1,0-0.2,0-0.2c0-0.1,0-0.1,0-0.1s0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0.2,0,0.5,0.2,0.9c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.2,0.3,0.4,0.5,0.6c0.1,0.1,0.1,0.1,0.2,0.2v1.7c-0.4-0.3-0.6-0.6-0.8-0.9c-0.1-0.2-0.2-0.3-0.2-0.5c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.1,0-0.2,0-0.2c0-0.1,0-0.1,0-0.1s0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0.2,0,0.5,0.2,0.9c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.2,0.3,0.4,0.5,0.6c0.1,0.1,0.1,0.1,0.2,0.2l0,0c0.4,0.3,0.8,0.7,1.3,1c0.3,0.2,0.6,0.4,1,0.5c0.3,0.2,0.7,0.3,1.1,0.5c0.8,0.3,1.6,0.5,2.4,0.7c0.4,0.1,0.9,0.2,1.3,0.3c0,0,0,0,0.1,0l0.1,0.4l0.3-0.1l0.3-0.1l-1-3.2c2.9-0.7,5.8-0.7,8.7,0l-1,3.2l0.3,0.1l0.3,0.1l0.1-0.4c0,0,0,0,0.1,0c0.4-0.1,0.9-0.2,1.3-0.3c0.9-0.2,1.7-0.5,2.4-0.7c0.4-0.1,0.7-0.3,1.1-0.5c0.3-0.2,0.7-0.3,1-0.5c0.5-0.3,0.9-0.6,1.3-1l0,0c0.1-0.1,0.1-0.1,0.2-0.2c0.4-0.4,0.7-0.9,0.8-1.2c0.2-0.4,0.2-0.7,0.2-0.9c0-0.1,0-0.2,0-0.2c0-0.1,0-0.1,0-0.1s0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0.1-0.1,0.2-0.1,0.4c-0.1,0.1-0.1,0.3-0.2,0.5c-0.1,0.2-0.2,0.3-0.4,0.5c-0.1,0.1-0.3,0.3-0.4,0.4v-1.7c0.1-0.1,0.1-0.1,0.2-0.2c0.4-0.4,0.7-0.9,0.8-1.2c0.2-0.4,0.2-0.7,0.2-0.9c0-0.1,0-0.2,0-0.2c0-0.1,0-0.1,0-0.1s0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0.1-0.1,0.2-0.1,0.4c-0.1,0.1-0.1,0.3-0.2,0.5c-0.1,0.2-0.2,0.3-0.4,0.5c-0.1,0.1-0.3,0.3-0.4,0.4v-1.8c1-0.8,1.7-1.8,1.8-3.1c0-1.1-0.6-2.1-1.4-2.8l0-0.6C27.5,9.3,28.2,10.3,28.8,9.3z M19.8,8.8C20.9,9,22,9.3,23,9.7c0.9,0.4,2.1,0.9,2.9,1.6l-4.4,2.7c-0.9-0.7-2.3-1.2-4-1.5L19.8,8.8z M21,15.7c0,1.3-2.7,2.3-6,2.3s-6-1-6-2.3s2.7-2.3,6-2.3S21,14.4,21,15.7z M16.5,8.4c0.9,0,1.8,0.1,2.6,0.3l-2.3,3.9c-0.6-0.1-1.2-0.1-1.8-0.1c-0.6,0-1.2,0-1.8,0.1l-2.3-3.9C12.7,8.4,14.6,8.3,16.5,8.4z M4.9,10.8c1.6-1,3.4-1.6,5.3-1.9l2.3,3.8c-1.7,0.3-3.1,0.8-4,1.5l-4.4-2.7C4.4,11.1,4.6,10.9,4.9,10.8z M5.4,21.6c-0.3-0.1-0.6-0.3-0.8-0.5c-0.1,0-0.1-0.1-0.2-0.1v-1.6c0.2,0.2,0.4,0.3,0.7,0.5c0.3,0.2,0.6,0.4,1,0.5c0.3,0.1,0.5,0.3,0.8,0.4c0,0,0,1.4,0,1.4C6.4,22,5.9,21.8,5.4,21.6z M6.9,19.9c-0.5-0.2-1-0.4-1.5-0.6c-0.3-0.1-0.6-0.3-0.8-0.5c-0.1,0-0.1-0.1-0.2-0.1v-1.9c0.2,0.1,0.5,0.3,0.7,0.4c0.6,0.3,1.2,0.6,1.8,0.8V19.9z M6.3,16.6c-0.9-0.4-1.8-0.9-2.5-1.7c-0.3-0.4-0.8-1.1-0.7-1.6c0-0.3,0.1-0.7,0.3-1c0.1-0.1,0.2-0.3,0.3-0.4L8,14.6c-0.3,0.4-0.5,0.8-0.5,1.2c0,0.6,0.4,1.2,1.1,1.7C7.9,17.3,7.1,17,6.3,16.6z M9.8,22.9c-0.8-0.1-1.5-0.3-2.2-0.5v-1.4c0.6,0.2,1.3,0.4,2,0.6c0.2,0.1,0.4,0.1,0.6,0.1l0.4,1.3C10.3,23,10,23,9.8,22.9z M10.5,20.8c-0.2,0-0.5-0.1-0.7-0.1c-0.8-0.1-1.5-0.3-2.2-0.5v-1.8c1.3,0.4,2.7,0.7,4.1,0.9c2.3,0.3,4.6,0.3,6.9,0c1.3-0.2,2.7-0.4,4-0.8v1.8c-0.7,0.2-1.5,0.4-2.2,0.5c-0.2,0-0.5,0.1-0.7,0.1C16.5,20,13.5,20,10.5,20.8z M22.5,22.4L22.5,22.4c-0.7,0.2-1.5,0.4-2.2,0.5c-0.3,0-0.5,0.1-0.8,0.1l0.4-1.3c0.2,0,0.4-0.1,0.6-0.1c0.7-0.2,1.4-0.4,2-0.6V22.4z M25.6,21.1L25.6,21.1c-0.1,0-0.1,0.1-0.2,0.1c-0.3,0.2-0.5,0.3-0.8,0.5c-0.4,0.2-0.9,0.4-1.5,0.6v-1.4c0.3-0.1,0.6-0.2,0.8-0.4c0.3-0.2,0.7-0.3,1-0.5c0.2-0.1,0.5-0.3,0.7-0.5V21.1z M23.1,19.9v-1.8c0.6-0.2,1.1-0.4,1.6-0.7c0.3-0.1,0.6-0.3,0.8-0.5v1.8c-0.1,0-0.1,0.1-0.2,0.1c-0.3,0.2-0.5,0.3-0.8,0.5C24.1,19.5,23.6,19.7,23.1,19.9z M26.9,13.3c0,1-0.9,1.9-1.8,2.5c-1.1,0.8-2.4,1.3-3.8,1.6c0.7-0.5,1.1-1.1,1.1-1.7c0-0.4-0.2-0.8-0.5-1.2l4.4-2.7C26.6,12.3,26.8,12.8,26.9,13.3z" />
                        </symbol>
                        <symbol id="icon-arrow" viewBox="0 0 32 32">
                            <title>arrow</title>
                            <path d="M7.333 24c-0.133 0-0.4 0-0.533-0.133l-6.667-6.667c0 0-0.133-0.133-0.133-0.267s0-0.133 0-0.267c0 0 0 0 0 0 0-0.133 0-0.133 0-0.267s0.133-0.133 0.133-0.267l6.667-6.667c0.4-0.133 0.8-0.133 1.067 0s0.267 0.667 0 0.933l-5.6 5.6h29.067c0.4 0 0.667 0.267 0.667 0.667s-0.267 0.667-0.667 0.667h-29.067l5.467 5.467c0.267 0.267 0.267 0.667 0 0.933 0 0.267-0.267 0.267-0.4 0.267z"></path>
                        </symbol>
                        <symbol id="icon-rotate" viewBox="0 0 24 24">
                            <path d="M17.6,2.9c1.5,1.4,2.2,3.4,2.2,5.2c0,1.2-0.3,2.4-0.9,3.5l-1.2-1.2C18,9.7,18.1,9,18.1,8.1c0-1.5-0.6-3-1.7-4.1c-2.2-2.2-5.9-2.2-8.1,0C7.2,5.2,6.6,6.7,6.6,8.1h2.7l-3.5,3.5L2.3,8.1h2.7c0-1.9,0.7-3.8,2.2-5.2h0C10,0,14.7,0,17.6,2.9z M23,17c0,2.9-4.9,5.3-11,5.3c-6.1,0-11-2.4-11-5.3s4.9-5.3,11-5.3C18.1,11.7,23,14.1,23,17z M14.6,16.8c0-0.6-1.2-1-2.6-1s-2.6,0.5-2.6,1s1.2,1,2.6,1S14.6,17.4,14.6,16.8z" />
                        </symbol>
                        <symbol id="icon-effect" viewBox="0 0 24 24">
                            <path d="M12,10.5c-6.1,0-11,2.4-11,5.3s4.9,5.3,11,5.3c6.1,0,11-2.4,11-5.3S18.1,10.5,12,10.5z M12,16.6c-1.4,0-2.6-0.5-2.6-1c0-0.6,1.2-1,2.6-1s2.6,0.5,2.6,1C14.6,16.2,13.4,16.6,12,16.6z"/>
					<path d="M19,2.9h0.4v4.7c0,0.6-0.6,1-1.4,1c-0.8,0-1.4-0.5-1.4-1s0.6-1,1.4-1c0.4,0,0.8,0.1,1,0.3V4.5l-3.2,0.7v3.1c0,0.6-0.6,1-1.4,1c-0.8,0-1.4-0.5-1.4-1s0.6-1,1.4-1c0.4,0,0.8,0.1,1,0.3v-4L19,2.9z"/>
					<polygon style={{stroke:'#FFFFFF', strokeWidth:0.5, strokeMiterLimit:10}} points="6.1,13.6 3.8,3.9 7.6,3.6" />
                        </symbol>
                        <symbol id="icon-drop" viewBox="0 0 32 32">
                            <title>drop</title>
                            <path d="M17.333 32c-5.867 0-10.667-4.8-10.667-10.667 0-5.6 9.733-20.4 10.133-21.067 0.267-0.4 0.8-0.4 1.067 0 0.4 0.667 10.133 15.467 10.133 21.067 0 5.867-4.8 10.667-10.667 10.667zM17.333 1.867c-2.133 3.333-9.333 14.933-9.333 19.467 0 5.2 4.133 9.333 9.333 9.333s9.333-4.133 9.333-9.333c0-4.533-7.2-16.133-9.333-19.467z"></path>
                            <path d="M13.333 26.533c-0.133 0-0.267 0-0.4-0.133-1.467-1.333-2.267-3.2-2.267-5.067 0-1.6 1.2-4.533 3.467-8.933 0.133-0.4 0.533-0.533 0.933-0.267 0.267 0.133 0.4 0.533 0.267 0.933-2.133 4-3.333 6.933-3.333 8.267 0 1.467 0.667 2.933 1.733 4 0.267 0.267 0.267 0.667 0 0.933 0 0.133-0.267 0.267-0.4 0.267z"></path>
                        </symbol>
                        <symbol id="icon-vinyls" viewBox="0 0 32 32">
                            <title>vinyls</title>
                            <g style={{fill: "#933ec5"}}>
                                <path d="M31.865 8.475l-0.194-0.206h-0.979l0.218-1.781c0.023-0.226-0.052-0.452-0.204-0.62s-0.37-0.265-0.597-0.265h-1.299v-1.871c0-0.438-0.357-0.794-0.795-0.794h-1.338v-1.871c0-0.438-0.357-0.794-0.795-0.794h-19.737c-0.438 0-0.794 0.357-0.794 0.794v1.871h-1.338c-0.438 0-0.794 0.357-0.794 0.794v1.871h-1.299c-0.227 0-0.445 0.097-0.597 0.265s-0.227 0.394-0.202 0.632l0.216 1.769h-0.73c-0.171 0-0.332 0.075-0.443 0.206l-0.163 0.219 3.177 22.316c0.074 0.416 0.433 0.719 0.856 0.719h23.961c0.422 0 0.782-0.301 0.859-0.736l3.138-22.047c0.030-0.168-0.017-0.34-0.126-0.47zM6.417 1.338h19.194v1.599h-19.194v-1.599zM4.284 4.004h23.459v1.599h-23.459v-1.599zM2.214 6.67h27.599l-0.196 1.599h-27.207l-0.196-1.599zM27.824 30.662h-23.619l-3.036-21.326h29.691l-3.035 21.326z"></path>
                                <path d="M15.747 10.935c-6.027 0-10.93 4.066-10.93 9.064s4.903 9.064 10.93 9.064 10.93-4.066 10.93-9.064-4.903-9.064-10.93-9.064zM15.747 27.996c-5.439 0-9.863-3.588-9.863-7.997s4.425-7.997 9.863-7.997 9.863 3.588 9.863 7.997-4.425 7.997-9.863 7.997z"></path>
                                <path d="M16.28 13.568c0-0.295-0.238-0.533-0.533-0.533-2.129 0-4.147 0.645-5.836 1.866-0.238 0.172-0.292 0.505-0.12 0.744 0.104 0.145 0.267 0.221 0.433 0.221 0.108 0 0.217-0.033 0.312-0.101 1.506-1.088 3.308-1.663 5.211-1.663 0.295 0 0.533-0.238 0.533-0.533z"></path>
                                <path d="M16.28 15.568c0-0.295-0.238-0.533-0.533-0.533-1.655 0-3.225 0.502-4.538 1.452-0.238 0.173-0.292 0.506-0.12 0.744 0.104 0.145 0.267 0.221 0.433 0.221 0.108 0 0.218-0.033 0.312-0.101 1.13-0.817 2.483-1.25 3.913-1.25 0.295 0 0.533-0.238 0.533-0.533z"></path>
                                <path d="M16.28 17.567c0-0.295-0.238-0.533-0.533-0.533-1.188 0-2.313 0.363-3.254 1.049-0.238 0.173-0.291 0.506-0.117 0.744 0.104 0.143 0.267 0.219 0.431 0.219 0.109 0 0.219-0.034 0.313-0.102 0.757-0.552 1.666-0.843 2.626-0.843 0.295 0 0.533-0.238 0.533-0.533z"></path>
                                <path d="M21.006 24.332c-1.506 1.089-3.308 1.664-5.211 1.664-0.295 0-0.533 0.238-0.533 0.533s0.238 0.533 0.533 0.533c2.129 0 4.147-0.645 5.836-1.866 0.238-0.173 0.292-0.506 0.12-0.744-0.172-0.239-0.506-0.293-0.745-0.12z"></path>
                                <path d="M15.262 24.529c0 0.295 0.238 0.533 0.533 0.533 1.656 0 3.226-0.502 4.538-1.452 0.239-0.173 0.292-0.506 0.12-0.744-0.173-0.239-0.506-0.292-0.744-0.12-1.13 0.818-2.483 1.25-3.913 1.25-0.295 0-0.534 0.238-0.534 0.533z"></path>
                                <path d="M15.262 22.53c0 0.295 0.238 0.533 0.533 0.533 1.189 0 2.314-0.363 3.254-1.049 0.237-0.173 0.29-0.507 0.116-0.745-0.173-0.237-0.506-0.29-0.745-0.116-0.756 0.552-1.664 0.843-2.626 0.843-0.295 0-0.533 0.238-0.533 0.533z"></path>
                                <path d="M17.199 19.99c0 0.497-0.555 0.901-1.241 0.901s-1.241-0.403-1.241-0.901c0-0.497 0.555-0.901 1.241-0.901s1.241 0.403 1.241 0.901z"></path>
                            </g>
                        </symbol>
                        <symbol id="icon-pause" viewBox="0 0 20 20">
                            <title>pause</title>
                            <path d="M15 3h-2c-0.553 0-1 0.048-1 0.6v12.8c0 0.552 0.447 0.6 1 0.6h2c0.553 0 1-0.048 1-0.6v-12.8c0-0.552-0.447-0.6-1-0.6zM7 3h-2c-0.553 0-1 0.048-1 0.6v12.8c0 0.552 0.447 0.6 1 0.6h2c0.553 0 1-0.048 1-0.6v-12.8c0-0.552-0.447-0.6-1-0.6z"></path>
                        </symbol>
                        <symbol id="icon-play" viewBox="0 0 20 20">
                            <title>play</title>
                            <path d="M15 10.001c0 0.299-0.305 0.514-0.305 0.514l-8.561 5.303c-0.624 0.409-1.134 0.106-1.134-0.669v-10.297c0-0.777 0.51-1.078 1.135-0.67l8.561 5.305c-0.001 0 0.304 0.215 0.304 0.514z"></path>
                        </symbol>
                        <symbol id="icon-prev" viewBox="0 0 20 20">
                            <title>prev</title>
                            <path d="M13.891 17.418c0.268 0.272 0.268 0.709 0 0.979s-0.701 0.271-0.969 0l-7.83-7.908c-0.268-0.27-0.268-0.707 0-0.979l7.83-7.908c0.268-0.27 0.701-0.27 0.969 0s0.268 0.709 0 0.979l-7.141 7.419 7.141 7.418z"></path>
                        </symbol>
                        <symbol id="icon-next" viewBox="0 0 20 20">
                            <title>next</title>
                            <path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path>
                        </symbol>
                        <symbol id="icon-stop" viewBox="0 0 20 20">
                            <title>stop</title>
                            <path d="M16 4.995v9.808c0 0.661-0.536 1.197-1.196 1.197h-9.807c-0.551 0-0.997-0.446-0.997-0.997v-9.807c0-0.66 0.536-1.196 1.196-1.196h9.808c0.55 0 0.996 0.446 0.996 0.995z"></path>
                        </symbol>
                        <symbol id="icon-lp-mini" viewBox="0 0 800 800">
                            <title>LP Mini</title>
                            <g style={{ fill: '#181819', stroke: '#141415', strokeWidth: 1.5 }}>
                                <circle cx="400" cy="400" r="380" />
                                <circle cx="400" cy="400" r="370" />
                                <circle cx="400" cy="400" r="360" />
                                <circle cx="400" cy="400" r="350" />
                                <circle cx="400" cy="400" r="340" />
                                <circle cx="400" cy="400" r="330" />
                                <circle cx="400" cy="400" r="320" />
                                <circle cx="400" cy="400" r="310" />
                                <circle cx="400" cy="400" r="300" />
                                <circle cx="400" cy="400" r="290" />
                                <circle cx="400" cy="400" r="280" />
                                <circle cx="400" cy="400" r="270" />
                                <circle cx="400" cy="400" r="260" />
                                <circle cx="400" cy="400" r="250" />
                                <circle cx="400" cy="400" r="240" />
                                <circle cx="400" cy="400" r="230" />
                                <circle cx="400" cy="400" r="220" />
                                <circle cx="400" cy="400" r="210" />
                                <circle cx="400" cy="400" r="200" />
                            </g>
                        </symbol>
                    </defs>
                </svg>
                <main>
                    <div className="view view--grid view--current">
                        <ul className="album-grid grid--loaded">
                            {this.props.albums.map((album, i) => (
                                <li className="grid__item">
                                    <a className="grid__link" href={`#album-${i + 1}`} onClick={this.setActiveAlbum.bind(this, album, (i + 1))} data-playlist-1="" data-playlist-2="audio/songStolen_Dreams_Backing_Track.mp3">
                                        <div className="img-wrap img-wrap--grid">
                                            <svg className="lp lp--grid">
                                                <use xlinkHref="#icon-lp-mini"></use>
                                            </svg>
                                            <img className="img img--grid" src={album.fields.albumPhoto.fields.file.url} alt="album1" />
                                        </div>
                                        <span className="year">1999</span>
                                        <h3 className="title">{album.fields.albumTitle}</h3>
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="deco-expander" style={deco_expander_style}></div>
                    <div className="view view--player">
                            <button className="control-button control-button--back" aria-label="Back to album slideshow">
                                <svg className="icon icon--arrow">
                                    <use xlinkHref="#icon-arrow"></use>
                                </svg>
                            </button>
                            <div className="player-info">
                                <h2 className="artist artist--player">Lena Glass</h2>
                                <h3 className="title title--player">Blue Moments</h3>
                                <span className="year year--player">1999</span>
                            </div>
                            <div className="player-stand">
                                <div className="visualizer"></div>
                                <span className="song"></span>
                                <div className="player__controls">
                                    <button className="player-button player-button--rotate" aria-label="Rotate LP">
                                        <svg className="icon icon--rotate">
                                            <use xlinkHref="#icon-rotate"></use>
                                        </svg>
                                    </button>
                                    <button className="player-button player-button--playstop" aria-label="Play or Stop">
                                        <svg className="icon icon--play icon--hidden">
                                            <use xlinkHref="#icon-play"></use>
                                        </svg>
                                        <svg className="icon icon--stop">
                                            <use xlinkHref="#icon-stop"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="player">
                            <div className="player__element player__element--lp">
                                <div className="player__element-inner">
                                    <svg className="player__svg-lp" viewBox="0 0 800 800">
                                        <title>LP</title>
                                        <path fill="#181819" d="M400,1C179.6,1,1,179.6,1,400s178.6,399,399,399s399-178.6,399-399S620.4,1,400,1zM400,409.8c-5.4,0-9.8-4.4-9.8-9.8s4.4-9.8,9.8-9.8s9.8,4.4,9.8,9.8S405.4,409.8,400,409.8z" />
                                        <g strokeWidth="1.5" stroke="#141415" fill="#181819">
                                            <path d="M400,20C190.1,20,20,190.1,20,400s170.1,380,380,380s380-170.1,380-380S609.9,20,400,20z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,30C195.7,30,30,195.6,30,400s165.7,370,370,370s370-165.7,370-370S604.3,30,400,30z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,40C201.2,40,40,201.2,40,400s161.2,360,360,360s360-161.2,360-360S598.8,40,400,40z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,50C206.7,50,50,206.7,50,400s156.7,350,350,350s350-156.7,350-350S593.3,50,400,50z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,60C212.2,60,60,212.2,60,400s152.2,340,340,340s340-152.2,340-340S587.8,60,400,60z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,70C217.8,70,70,217.8,70,400s147.8,330,330,330s330-147.8,330-330S582.2,70,400,70z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,80C223.3,80,80,223.3,80,400s143.3,320,320,320s320-143.3,320-320S576.7,80,400,80z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,90C228.8,90,90,228.8,90,400s138.8,310,310,310s310-138.8,310-310S571.2,90,400,90z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,100c-165.7,0-300,134.3-300,300s134.3,300,300,300s300-134.3,300-300S565.7,100,400,100z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,110c-160.2,0-290,129.8-290,290s129.8,290,290,290s290-129.8,290-290S560.2,110,400,110z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,120c-154.6,0-280,125.4-280,280s125.4,280,280,280s280-125.4,280-280S554.6,120,400,120z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,130c-149.1,0-270,120.9-270,270s120.9,270,270,270s270-120.9,270-270S549.1,130,400,130z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,140c-143.6,0-260,116.4-260,260s116.4,260,260,260s260-116.4,260-260S543.6,140,400,140z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,150c-138.1,0-250,111.9-250,250s111.9,250,250,250s250-111.9,250-250S538.1,150,400,150z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,160c-132.5,0-240,107.5-240,240s107.5,240,240,240s240-107.5,240-240S532.5,160,400,160z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,170c-127,0-230,103-230,230s103,230,230,230s230-103,230-230S527,170,400,170z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,180c-121.5,0-220,98.5-220,220s98.5,220,220,220s220-98.5,220-220S521.5,180,400,180z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,190c-116,0-210,94-210,210s94,210,210,210s210-94,210-210S516,190,400,190z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                            <path d="M400,200c-110.5,0-200,89.5-200,200s89.5,200,200,200s200-89.5,200-200S510.5,200,400,200z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z" />
                                        </g>
                                        <path id="cover" fill="#4bb749" opacity="0" d="M400,262.1c-76.1,0-137.9,61.7-137.9,137.9S323.9,537.9,400,537.9S537.9,476.1,537.9,400S476.1,262.1,400,262.1z M400,411.7c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7S406.4,411.7,400,411.7z" />
                                        <defs>
                                            <clipPath id="coverClip">
                                                <path fill="#4bb749" d="M400,262.1c-76.1,0-137.9,61.7-137.9,137.9S323.9,537.9,400,537.9S537.9,476.1,537.9,400S476.1,262.1,400,262.1z M400,411.7c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7S406.4,411.7,400,411.7z" />
                                            </clipPath>
                                        </defs>
                                        <image xlinkHref="img/album11.jpg" x="250" y="250" height="300px" width="300px" clipPath="url(#coverClip)" />
                                        <text className="lp-side-label lp-side-label--a" transform="matrix(1 0 0 1 381.8867 509.8047)" style={{opacity:0.2, fontFamily:'Arial', fontSize:"50.4557px"}}>A</text>
                                        <text className="lp-side-label lp-side-label--b" transform="matrix(-1 0 0 1 418.2188 509.8047)" style={{opacity:0.2, fontFamily:'Arial', fontSize:"50.4557px"}}>B</text>
                                    </svg>
                                </div>
                            </div>
                            <div className="player__element player__element--tonearm">
                                <svg className="player__svg-tonearm">
                                    <use xlinkHref="#icon-tonearm"></use>
                                </svg>
                            </div>
                        </div>
                        <div className="effects">

                                <button className="effects__button effects__button--vinyleffect effects__button--active" aria-label="Toggle Vinyl effect">
                                    <svg className="icon icon--effect">
                                        <use xlinkHref="#icon-effect"></use>
                                    </svg>
                                </button>

                                <div className="effects__irs">
                                    <button className="effects__button">
                                        <svg className="icon icon--touchthrough icon--ir-cathedral">
                                            <use xlinkHref="#icon-ir-cathedral"></use>
                                        </svg>
                                    </button>
                                    <button className="effects__button">
                                        <svg className="icon icon--touchthrough icon--ir-acoustic">
                                            <use xlinkHref="#icon-ir-acoustic"></use>
                                        </svg>
                                    </button>
                                    <button className="effects__button">
                                        <svg className="icon icon--touchthrough icon--ir-stadium">
                                            <use xlinkHref="#icon-ir-stadium"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    <div className={`view view--single ${this.state.viewSingle ? 'view--current' : ''}`}>
                        <div className={`single ${this.state.viewSingle ? 'single--current' : ''}`} id={this.state.activeIndex ? `album-${this.state.activeIndex}` : null} data-side1="mp3/Stolen_Dreams_Backing_Track.mp3,mp3/Dream_On_This_Side.mp3,mp3/Beautiful_Paranoia.mp3" data-side2="mp3/Rock_On.mp3,mp3/Old_Man_and_the_Sea_II.mp3,mp3/Dawn's_Battle.mp3">
                            <div className="img-wrap img-wrap--single">
                                <img className="img img--single" src={this.state.activeAlbum ? this.state.activeAlbum.fields.albumPhoto.fields.file.url : null} alt={this.state.activeAlbum ? this.state.activeAlbum.fields.albumTitle : ''} />
                            </div>
                            <span className="number">01<span className="number__total">12</span></span>
                            <h2 className="artist artist--single">{this.state.activeAlbum ? this.state.activeAlbum.fields.albumTitle : ''}</h2>
                            <h3 className="title title--single">Blue Moments</h3>
                            <span className="year year--single">1999</span>
                        </div>
                        <button className="control-button control-button--back" aria-label="Back to grid view" onClick={this.closeActiveAlbum.bind(this)}>
                            <svg className="icon icon--arrow">
                                <use xlinkHref="#icon-arrow"></use>
                            </svg>
                        </button>
                    </div>

                    


                </main>
            </div>
        )
    }
}
