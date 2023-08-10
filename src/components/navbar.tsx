import React from 'react'

const navbar = () => {
  return (
    <nav className='w-full flex justify-around bg-Platinum p-4'>
        <ul>
            <li>GlamEdge</li>
        </ul>
        <div>
            <ul className='flex w-96 justify-between'>
                <li>Home</li>
                <li>Shop</li>
                <li>Sale</li>
                <li>cart</li>
                <li>wishlist</li>
                <li>login</li>
            </ul>
        </div>
    </nav>
  )
}

export default navbar