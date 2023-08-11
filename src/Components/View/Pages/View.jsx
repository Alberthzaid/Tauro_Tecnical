import React from 'react'
import { Card_User } from '../Molecules/Card_user/Card_User'
import { Nav_bar } from '../Organism/Nav_bar/Nav_bar'
export const View = () => {
  return (
    <div>
        <Nav_bar/>
        <div className="card_users">
            
            <Card_User/>
        </div>
    </div>
  )
}
