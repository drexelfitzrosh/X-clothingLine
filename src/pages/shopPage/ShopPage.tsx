import React from 'react'

import './ShopPage.style.scss'
import SHOP_DATA from './shopData'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'

interface IItems {
  id: number,
  name: string,
  imageUrl: string,
  price: number
}

interface IShopData {
  id: number,
  title: string,
  routeName: string,
  items: Array<IItems>
}

const ShopPage: React.FC = () =>{
  const shopData: Array<IShopData> = SHOP_DATA
  return (
    <div className='shop-page'>
      {
        shopData.map(({id, ...shopDataProps})=>(
          <PreviewCollection key={id} {...shopDataProps} />
        ))
      }
    </div>
  )
}

export default ShopPage