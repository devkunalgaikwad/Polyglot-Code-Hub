'use client'

import React from 'react'
import Modal from './Modal'
import { ProductWithPrice } from '@/types'

interface SubscribeModalProps {
    products: ProductWithPrice[];
}

const SubscribeModal = ({products}:SubscribeModalProps) => {
    let content =(
        <div className='text-center'>
            No product avaiable
        </div>
    )
  return (
    <Modal title='Only for premium users' description='Join Spotify Premium' isOpen onChange={()=>{}}>
        {content}
    </Modal>
  )
}

export default SubscribeModal