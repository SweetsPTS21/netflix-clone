import React, { createContext, useContext, useMemo, useState } from 'react'
import { useAuthedContext } from './authedContext'
import { useAppContext } from './appContext'
import { useQuery } from '@apollo/client'
import { GET_USER_PROFILES } from '../api/graphql/profile'

const ProfileContext = createContext({})

export const useProfileContext = () => useContext(ProfileContext)

const ProfileContextProvider = ({ children }) => {
    const { authedLogin, authedUser } = useAuthedContext()
    const { isRequesting } = useAppContext()

    const [editProfile, setEditProfile] = useState(false)
    const [currProfile, setCurrProfile] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    const {
        data: profileData,
        loading: profileLoading,
        error: profileError
    } = useQuery(GET_USER_PROFILES, {
        variables: {
            userId: authedUser?.id
        }
    })

    console.log('profileData', profileData)

    const contexValue = useMemo(
        () => ({
            editProfile,
            setEditProfile,
            currProfile,
            setCurrProfile,
            isEditing,
            setIsEditing,
            profiles: profileData?.getAllProfileByUserId
        }),
        [
            editProfile,
            setEditProfile,
            currProfile,
            setCurrProfile,
            isEditing,
            setIsEditing,
            profileData
        ]
    )

    return (
        authedLogin &&
        !profileLoading &&
        !profileError &&
        !isRequesting && (
            <ProfileContext.Provider value={contexValue}>
                {children}
            </ProfileContext.Provider>
        )
    )
}

export default ProfileContextProvider
