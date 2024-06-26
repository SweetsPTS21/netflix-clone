import React, { useState } from 'react'
import { ConfigProvider, Layout } from 'antd'
import Header from '../layout/header'
import EditProfile from './edit'
import ProfileContent from './content'
import ProfileContextProvider from '../../context/profileContext'

const Profile = () => {
    return (
        <ProfileContextProvider>
            <ConfigProvider
                theme={{
                    components: {
                        Input: {
                            hoverBorderColor: 'white',
                            hoverBg: 'rgba(22, 22, 22, 0.7)',
                            activeBg: 'rgba(22, 22, 22, 0.7)',
                            activeBorderColor: 'white'
                        },
                        Button: {
                            defaultActiveBg: '#1f1f1f',
                            defaultHoverBg: '#1f1f1f',
                            defaultHoverBorderColor: '#353535'
                        },
                        Select: {
                            colorBorder: 'rgba(128, 128, 128, 0.7)',
                            selectorBg: 'rgba(22, 22, 22, 0.7)',
                            optionActiveBg: 'rgba(22, 22, 22, 0.7)',
                            optionSelectedColor: '#000000'
                        },
                        Modal: {
                            contentBg: '#1f1f1f',
                            headerBg: '#1f1f1f',
                            titleColor: 'white'
                        }
                    }
                }}
            >
                <Layout className={'h-screen bg-black'}>
                    <Header type={'login'} width={'100%'} />
                    <Layout.Content>
                        <ProfileContent />
                        <EditProfile />
                    </Layout.Content>
                </Layout>
            </ConfigProvider>
        </ProfileContextProvider>
    )
}

export default Profile
