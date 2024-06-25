import React, { FC } from 'react'
import "./Layout.scss"

type Props = {
  children: React.ReactNode
}

const Layout:FC<Props> = ({children}) => {
  return (
    <div className='auth_wrapper'>{children}</div>
  )
}

export default Layout