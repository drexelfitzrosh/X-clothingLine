import React from 'react'

import MenuItem from '../menu-item/MenuItem'
import './directory.style.scss'
import sections from './data'

interface ISection {
  title: string,
  imageUrl: string,
  id: number,
  size: string
}


const Directory: React.FC = () => {
  const sectionsData: ISection[] = sections
  return (
    <div className='directory-menu'>
      {
        sectionsData.map(({id, title, imageUrl, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}></MenuItem>
        ))
      }
    </div>
  )
}

export default Directory