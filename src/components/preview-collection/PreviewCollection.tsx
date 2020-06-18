import React from 'react'

import CollectionItem from '../collection-item/CollectionItem'
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

const PreviewCollection: React.FC<IpreviewCollectionProps> = ({ title, items }) =>{
  return (
    <div className='collection-preview'>
      <h1>{title}</h1>
      <div className='preview'>
        {
          items.filter((item, indx)=> indx < 4 ).map(({id, ...itemProps})=>(
            <CollectionItem key={id} {...itemProps} />
          ))
        }
      </div>
    </div>
  )
}

export default PreviewCollection