import React from 'react'
import { UserName } from '../../Atoms/User_name/UserName'
import { Button_User } from '../../Atoms/Button_User/Button_User'
import { User_Info } from '../../Atoms/User_Info/User_Info'

export const Card_User = () => {
  return (
    <div className='User_Card'>
        <UserName/>
        <User_Info/>
        <Button_User/>
    </div>

  )
}
