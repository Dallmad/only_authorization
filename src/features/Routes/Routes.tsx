import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {PATH} from '../../constants/routes'
import {Error404} from '../ErrorPage'
import {Profile} from '../Profile'
import {Login} from '../Auth'

export const AppRoutes:React.FC = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to={PATH.AUTHORIZATION}/>}/>
                <Route path={PATH.AUTHORIZATION} element={<Login/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.ERROR404} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate to={PATH.ERROR404}/>}/>
            </Routes>
        </div>
    )
}