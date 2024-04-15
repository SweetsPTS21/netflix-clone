import { profiles } from '../profile/profile'
import { Avatar, Button, Divider } from 'antd'
import {
    EditOutlined,
    QuestionCircleOutlined,
    UserOutlined
} from '@ant-design/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutStart } from '../../redux/actions/login/actions'

const SignOutItem = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <Divider className={'p-0 m-2'} />
            <Button
                type={'text'}
                onClick={() => {
                    dispatch(logoutStart())
                }}
                className={'text-center'}
            >
                Sign Out
            </Button>
        </div>
    )
}

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
        label: <SignOutItem />
    }
]

export const listItems = [...listProfiles, ...newItems]
