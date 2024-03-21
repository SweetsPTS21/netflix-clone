import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Setting from './index'

const SettingRouter = (props) => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Setting />} />
            </Route>
        </Routes>
    )
}

SettingRouter.propTypes = {}

export default SettingRouter
