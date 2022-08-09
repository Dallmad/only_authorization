import React from 'react'
import {AppRoutes} from '../features/Routes'
import {Header} from '../features/Header'
import {AppRoutesWrapper} from './App.styles'

export const App = () => {
  return (
    <>
        <Header/>
        <AppRoutesWrapper >
            <AppRoutes/>
        </AppRoutesWrapper>
    </>
  )
}
