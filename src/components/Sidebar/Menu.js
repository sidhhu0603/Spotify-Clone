import React from 'react'
import {Icon} from '../../Icons'

function Menu() {
  return (
    <>
    <nav className='px-2'>
        <ul className='flex flex-col'>
            <li>
                <div className='h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white'>
                    <Icon name='home'></Icon>Home
                </div>
            </li>

            <li>
                <div className='h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white'>
                    <Icon name='search'></Icon>Search
                </div>
            </li>

            <li>
                <div className='h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white'>
                    <Icon name='collection'></Icon>Library
                </div>
            </li>

        </ul>
    </nav>
    </>
  )
}

export default Menu