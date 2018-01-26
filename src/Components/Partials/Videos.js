import React, { Component } from 'react'
import { Embed, Button, Icon, Image, Item, Label } from 'semantic-ui-react'

export default class Videos extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }
  render () {
    return (
      <div>
        <div>
          <Embed
            id='O6Xo21L0ybE'
            placeholder='/assets/images/image-16by9.png'
            source='youtube'
          />
        </div>
        <div>
          <Item.Group divided>
            <Item>
              <Item.Image src='/assets/images/wireframe/image.png' />
              <Item.Content>
                <Item.Header as='a'>12 Years a Slave</Item.Header>
                <Item.Meta>
                  <span className='cinema'>Union Square 14</span>
                </Item.Meta>
                <Item.Description>Some shit</Item.Description>
                <Item.Extra>
                  <Label>IMAX</Label>
                  <Label icon='globe' content='Additional Languages' />
                </Item.Extra>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image src='/assets/images/wireframe/image.png' />
              <Item.Content>
                <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                <Item.Meta>
                  <span className='cinema'>IFC Cinema</span>
                </Item.Meta>
                <Item.Description>Some more shit</Item.Description>
                <Item.Extra>
                  <Button primary floated='right'>
                                        Buy tickets
                    <Icon name='right chevron' />
                  </Button>
                  <Label>Limited</Label>
                </Item.Extra>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image src='/assets/images/wireframe/image.png' />
              <Item.Content>
                <Item.Header as='a'>Watchmen</Item.Header>
                <Item.Meta>
                  <span className='cinema'>IFC</span>
                </Item.Meta>
                <Item.Description>Some mooore shit</Item.Description>
                <Item.Extra>
                  <Button primary floated='right'>
                                        Buy tickets
                    <Icon name='right chevron' />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </div>
      </div>
    )
  }
}
