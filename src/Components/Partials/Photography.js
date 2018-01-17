import React, { Component } from 'react'
import '../../css/photography.css'
import Slider from 'react-slick'


export default class Photography extends Component {
    constructor(props) {
        super(props)

       this.next = this.next.bind(this)
       this.previous = this.previous.bind(this)
    }
    componentDidMount() {
        // $('.slider').clone().removeAttr('id').attr('id', 'slider-2').appendTo('body');

        // $('#slider-1').slick({
        //     arrows: false,
        //     speed: 750,
        //     asNavFor: '#slider-2',
        //     dots: false
        // }).on('mousedown touchstart', function () {
        //     $('body').addClass('down');
        // }).on('mouseleave mouseup touchend', function () {
        //     $('body').removeClass('down');
        // });

        // $(window).on('keydown', function () {
        //     $('body').addClass('down');
        // }).on('keyup', function () {
        //     $('body').removeClass('down');
        // });

        // $('#slider-2').slick({
        //     fade: true,
        //     arrows: false,
        //     speed: 300,
        //     asNavFor:
        //     '#slider-1',
        //     dots: false
        // });

        // setTimeout(function () {
        //     $(window).trigger('keydown');
        //     setTimeout(function () {
        //         $('#slider-1').slick('slickNext');
        //         setTimeout(function () {
        //             $(window).trigger('keyup');
        //         }, 500);
        //     }, 600);
        // }, 1500);

        // $('#slider-1 image').removeAttr('mask');

        // $(window).on('resize', function () {
        //     $('#donutmask circle').attr({
        //         cx: $(window).width() / 2,
        //         cy: $(window).height() / 2
        //     });
        //     $('#donutmask #outer').attr({
        //         r: $(window).height() / 2.6
        //     });
        //     $('#donutmask #inner').attr({
        //         r: $(window).height() / 4.5
        //     });
        // }).resize();

        // $(window).on('mousemove', function (e) {
        //     $('.cursor').css({
        //         top: e.pageY + 'px',
        //         left: e.pageX + 'px',
        //     })
        // });

    }
  
  next() {
    Slider.slickNext()
  }
  previous() {
    Slider.slickPrev()
  }
    handleMouseDown() {
        const Photography = document.getElementById('Photography')
        Photography.classList.add('down')
    }
    render() {
        const Prev = (props) => <div onClick={props.onClick} className="button_previous"><img src='/img/small-previous.svg' alt=""/></div>
        const Next = (props) => <div onClick={props.onClick} className="button_next"><img src='/img/small-next.svg' alt=""/></div>
        const { photos } = this.props
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: 'item',
            nextArrow: <Next onClick={this.next} />,
            prevArrow: <Prev  onClick={this.previous}/>
        };
        return (
            <div id="Photography">
                <Slider {...settings} className="slider" id="sliderMain" onMouseDown={this.handleMouseDown.bind(this)}>
                    {photos.map((photo) => (
                        <div className="item">

                            <img src={photo.fields.image.fields.file.url} />
                            <div className="tit">{photo.fields.title}</div>
                        </div>
                    ))}
                </Slider>
                <svg>
                    <defs>
                        <mask id="donutmask">
                            <circle id="outer" cx="250" cy="250" r="400" fill="white" />
                            <circle id="inner" cx="250" cy="250" r="300" />
                        </mask>
                    </defs>
                </svg>
            </div>
        )
    }
}