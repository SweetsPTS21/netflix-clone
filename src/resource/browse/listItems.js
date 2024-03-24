import { profiles } from '../profile/profile'
import { Avatar, Divider } from 'antd'
import {
    EditOutlined,
    QuestionCircleOutlined,
    UserOutlined
} from '@ant-design/icons'
import React from 'react'

const listProfiles = profiles.map((profile) => {
    return {
        key: profile.id.toString(),
        icon: <Avatar src={profile.image} />,
        label: <p>{profile.name}</p>
    }
})

const newItems = [
    {
        key: '6',
        label: <p>Manage Profiles</p>,
        icon: (
            <EditOutlined
                style={{
                    fontSize: '1.5rem',
                    marginRight: '0.9rem'
                }}
            />
        )
    },
    {
        key: '7',
        label: <p>Account</p>,
        icon: (
            <UserOutlined
                style={{
                    fontSize: '1.5rem',
                    marginRight: '0.9rem'
                }}
            />
        )
    },
    {
        key: '8',
        label: <p>Help Center</p>,
        icon: (
            <QuestionCircleOutlined
                style={{
                    fontSize: '1.5rem',
                    marginRight: '0.9rem'
                }}
            />
        )
    },
    {
        key: '9',
        label: (
            <div>
                <Divider className={'p-0 m-2'} />
                <p className={'text-center'}>Sign Out</p>
            </div>
        )
    }
]

export const listItems = [...listProfiles, ...newItems]
