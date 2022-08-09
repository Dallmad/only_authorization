import React from 'react'
import {AppRoutes} from '../features/Routes'
import {Header} from '../features/Header'
import {AppWrapper} from './App.styles'

export const App = () => {
  return (
    <>
        <Header/>
        <AppWrapper >
            <AppRoutes/>
        </AppWrapper>
    </>
  )
}
