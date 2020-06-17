import React from 'react'

import MenuItem from '../menu-item/MenuItem'
import './directory.style.scss'
import sections from './data'

interface ISection {
  title: string,
  imageUrl: string,
  id: number,
  size: string,
  linkUrl: string
}


const Directory: React.FC = () => {
  const sectionsData: ISection[] = sections
  return (
    <div className='directory-menu'>
      {
        sectionsData.map(({id, ...sectionProps}) => (
          <MenuItem key={id} {...sectionProps}></MenuItem>
        ))
      }
    </div>
  )
}

export default Directory