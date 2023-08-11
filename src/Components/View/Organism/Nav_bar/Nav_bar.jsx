import React from 'react'
import './Nav_bar.css'
import { Seacrh } from '../../Molecules/Search_Input/Search'
import { Title } from '../../Atoms/Title/Title'
import { List } from '../../Molecules/List/List'

export const Nav_bar = () => {
  return (
    <div className='NavBar'>
        <nav>
        <Title/>
        <List/>
        <Seacrh/>
        </nav>
    </div>
  )
}
