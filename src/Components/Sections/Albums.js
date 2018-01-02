import React, { Component } from 'react'
import { Stereo } from '../Partials/Stereo'
import Player from '../Partials/Player'
import { Card, Icon, Image, Segment, Grid, Container } from 'semantic-ui-react'

const CardRight = (props) => (
    <Card>
        <Image src={props.album.fields.albumPhoto.fields.file.url} />
        <Card.Content>
            <Card.Header>
                {props.album.fields.albumTitle}
            </Card.Header>
            <Card.Meta>
                <span className='date'>
                    Joined in 2015
        </span>
            </Card.Meta>
            <Card.Description>
                Matthew is a musician living in Nashville.
      </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends
      </a>
        </Card.Content>
    </Card>
)

const CardLeft = (props) => (
    <Card>
        <Image src={props.album.fields.albumPhoto.fields.file.url} />
        <Card.Content>
            <Card.Header>
                {props.album.fields.albumTitle}
            </Card.Header>
            <Card.Meta>
                <span className='date'>
                    Joined in 2015
        </span>
            </Card.Meta>
            <Card.Description>
                Matthew is a musician living in Nashville.
      </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends
      </a>
        </Card.Content>
    </Card>
)


export default class Albums extends Component {

    render() {

        return (

            <div className="hero fs">
                <div className="bg faded"></div>
                <div className="vcenter">
                    <div className="container">
                        <div className="grid">
                            <div className="col-1">2017</div>
                            <div className="col-7">
                                <div className="sub-label">January</div>
                                <a className="project-link">
                                    <h1 className="stripe animatedText">{this.props.section.fields.sectionTitle}</h1>
                                </a>
                                <div className="sub-label">Pye Luis</div>
                                <div className="sub-label">Official</div>
                                <section id="AlbumGallery">
                                    <Grid className="timeline">
                                        {this.props.data.albums.map((album, i) => {
                                            if (i % 2 === 0) {
                                                return (
                                                    <Grid.Row>
                                                        <div className="timeline-icon">
                                                            <img src="/img/radio.svg" alt="" />
                                                        </div>
                                                        <Grid.Column floated='left' width={5}>
                                                            <CardRight album={album} />
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                )
                                            } else {
                                                return (
                                                    <Grid.Row>
                                                        <div className="timeline-icon">
                                                            <img src="/img/radio.svg" alt="" />
                                                        </div>
                                                        <Grid.Column floated='right' width={5}>
                                                            <CardLeft album={album} />
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                )
                                            }
                                        })}
                                    </Grid>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}