import React, { useState, useEffect } from 'react'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { Websites } from './Websites'
import { v4 as uuidv4 } from 'uuid'

export interface Website {
  id: string
  url: string
  name: string
  icon: string
}

const WebsitesContainer: React.FC = () => {
  const [websites, setWebsites] = useState<Website[] | []>([])

  const addWebsite = (url, name) => {
    const finalUrl = url.replace(/(^\w+:|^)\/\//, '')
    let iconUrl = finalUrl
    if (finalUrl.includes('reddit.com')) {
      iconUrl = 'reddit.com'
    }
    const newWebsite = {
      id: uuidv4(),
      url: `http://${finalUrl}`,
      name,
      icon: `https://api.faviconkit.com/${iconUrl}/144`
    }
    setWebsites([...websites, newWebsite])
  }

  const deleteWebsite = id => {
    const newWebsites = websites.filter(website => website.id !== id)
    setWebsites(newWebsites)
  }

  useEffect(() => {
    if (localStorage.getItem('websites')) {
      // @ts-ignore
      setWebsites(JSON.parse(localStorage.getItem('websites')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('websites', JSON.stringify(websites))
  }, [websites])

  return (
    <BlockWrapper isLoading={false} hasError={false} error={''} name="Websites">
      <Websites
        websites={websites}
        deleteWebsite={deleteWebsite}
        addWebsite={addWebsite}
      />
    </BlockWrapper>
  )
}

export default WebsitesContainer
