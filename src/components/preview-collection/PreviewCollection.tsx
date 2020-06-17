import React from 'react'

import './PreviewCollection.style.scss'

interface Iitems {
  id: number,
  name: string,
  imageUrl: string,
  price: number
}

interface IpreviewCollectionProps {
  title: string
  items: Array<Iitems>
}

const PreviewCollection: React.FC = ({ title, items }) =>{
  return (
    <div className='collection-preview'>
      <h1>{title}</h1>
      <div className='preview'>
        {
          items.map((item)=>(
            <div key={item.id}>{item.name}</div>
          ))
        }
      </div>
    </div>
  )
}

export default PreviewCollection