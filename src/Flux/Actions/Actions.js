import * as Contentful from 'contentful'
import _ from 'lodash'
import AppStore from '../Store/AppStore'
import {CONFIG} from '../../config'

export const getStore = (callback) => {
  const cms = Contentful.createClient({
    space: CONFIG.space_id,
    accessToken: CONFIG.ACCESS_TOKEN
  })

  cms.getEntries().then((response) => {
    console.log(response.items)
    const songs = _.filter(response.items, (item) => item.sys.contentType.sys.id === 'song')
    const albums = _.filter(response.items, (item) => item.sys.contentType.sys.id === 'album')
    const videos = _.filter(response.items, (item) => item.sys.contentType.sys.id === 'video')
    let sections = _.filter(response.items, (item) => (item.sys.contentType.sys.id === 'section' && item.fields.sectionTitle !== 'Photography'))
    sections = _.sortBy(sections, [(section) => section.fields.order], ['asc'])
    let photography = _.find(response.items, (item) => item.fields.sectionTitle === 'Photography')

    AppStore.data.songs = songs
    AppStore.data.sections = sections
    AppStore.data.albums = albums
    AppStore.data.videos = videos
    AppStore.data.photography = photography
    AppStore.data.ready = true
    AppStore.emitChange()
  })
}
