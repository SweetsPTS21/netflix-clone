import React from 'react'
import { profiles } from '../../resource/profile/profile'
import { EditOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'

const ProfileContent = ({
    editProfile,
    setIsEditing,
    setCurrProfile,
    setEditProfile
}) => {
    const { changeRequesting } = useAppContext()

    return (
        <div
            className={
                'w-[60%] max-w-[70rem] h-full my-0 pt-20 mx-auto flex flex-col items-center gap-16'
            }
        >
            <h1 className={'text-6xl text-white'}>Ai đang xem?</h1>
            <div className={'list-profile'}>
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        className={'flex flex-col items-center'}
                    >
                        <Link
                            to={'/browse'}
                            onClick={() => changeRequesting(true)}
                        >
                            <div className={'relative'}>
                                <img
                                    className={'w-full h-full'}
                                    src={profile.image}
                                    alt={profile.name}
                                />
                                {editProfile && (
                                    <div
                                        className={'edit-profile'}
                                        style={{
                                            backgroundColor:
                                                'rgba(0, 0, 0, 0.5)'
                                        }}
                                    >
                                        <div
                                            className={'edit-outlined'}
                                            onClick={() => {
                                                setIsEditing(true)
                                                setCurrProfile(profile)
                                            }}
                                        >
                                            <EditOutlined />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Link>
                        <p className={'text-white mt-4 text-xl truncate'}>
                            {profile?.name}
                        </p>
                    </div>
                ))}
            </div>
            <div>
                <Button
                    className={'px-12 py-2 mt-8 h-max btn-secondary-dark'}
                    size={'large'}
                    onClick={() => setEditProfile(!editProfile)}
                >
                    <p className={'text-2xl'}>Quản lý hồ sơ</p>
                </Button>
            </div>
        </div>
    )
}

ProfileContent.propTypes = {
    editProfile: PropTypes.bool,
    setIsEditing: PropTypes.func,
    setCurrProfile: PropTypes.func,
    setEditProfile: PropTypes.func
}

ProfileContent.defaultProps = {
    editProfile: false
}

export default ProfileContent
