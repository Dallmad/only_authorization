import React from 'react'
import {AppRoutes} from '../features/Routes/Routes'
import {Header} from '../features/Header/Header'

export const App = () => {
  return (
    <div >
        <Header/>
        <AppRoutes/>
    </div>
  )
}
