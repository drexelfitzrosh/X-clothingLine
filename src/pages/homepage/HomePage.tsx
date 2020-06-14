import React from 'react'

import Directory from '../../components/directory/directory'
import './HomePage.style.scss'

const HomePage: React.FC = () =>{
  return (
    <div className='homepage'>
      <Directory></Directory>
    </div>
  )
}

export default HomePage