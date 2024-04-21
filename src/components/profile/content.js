import React from 'react'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import { useProfileContext } from '../../context/profileContext'
import defaultProfile from '../../assets/img/200.png'

const ProfileContent = () => {
    const { changeRequesting } = useAppContext()
    const {
        profiles,
        editProfile,
        setIsEditing,
        setCurrProfile,
        setEditProfile,
        setFormMode
    } = useProfileContext()

    return (
        <div
            className={
                'w-[60%] max-w-[70rem] h-full my-0 pt-20 mx-auto flex flex-col items-center gap-16'
            }
        >
            <h1 className={'text-6xl text-white'}>Ai đang xem?</h1>
            <div className={'list-profile'}>
                {profiles?.map((profile) => (
                    <div
                        key={profile.id}
                        className={'flex flex-col items-center'}
                    >
                        <Link
                            to={!editProfile ? '/browse' : '#'}
                            onClick={() => {
                                if (!editProfile) {
                                    changeRequesting(true)
                                }
                            }}
                        >
                            <div className={'relative'}>
                                <img
                                    className={'w-full h-full'}
                                    src={profile.image || defaultProfile}
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
                                                setFormMode('update')
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
                {profiles?.length < 5 && (
                    <div className={'flex flex-col items-center'}>
                        <div
                            className={
                                'w-40 h-40 bg-gray-800 flex justify-center items-center'
                            }
                        >
                            <PlusOutlined
                                className={'text-5xl text-white'}
                                onClick={() => {
                                    setIsEditing(true)
                                    setCurrProfile(null)
                                    setFormMode('add')
                                }}
                            />
                        </div>
                        <p className={'text-white mt-4 text-xl'}>Thêm hồ sơ</p>
                    </div>
                )}
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

export default ProfileContent
