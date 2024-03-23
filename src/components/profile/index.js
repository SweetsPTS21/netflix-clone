import React, { useState } from 'react'
import { ConfigProvider, Layout } from 'antd'
import Header from '../layout/header'
import EditProfile from './edit'
import ProfileContent from './content'

const Profile = () => {
    const [editProfile, setEditProfile] = useState(false)
    const [currProfile, setCurrProfile] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    return (
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
                    <ProfileContent
                        editProfile={editProfile}
                        setIsEditing={setIsEditing}
                        setCurrProfile={setCurrProfile}
                        setEditProfile={setEditProfile}
                    />
                    <EditProfile
                        isEditing={isEditing}
                        profile={currProfile}
                        setIsEditing={setIsEditing}
                        setEditProfile={setEditProfile}
                    />
                </Layout.Content>
            </Layout>
        </ConfigProvider>
    )
}

export default Profile
