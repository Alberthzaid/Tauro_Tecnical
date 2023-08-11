import React from 'react'
import { Input } from '../../Atoms/Inputs/Input'
import { Button_Search } from '../../Atoms/Buttons/Button_Search'
import './Search.css'

export const Seacrh = () => {
  return (
    <div className='SearchInput'>
        <Input/>
        <Button_Search/>
    </div>
  )
}
