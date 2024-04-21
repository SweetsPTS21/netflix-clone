import { gql } from '@apollo/client'

export const GET_USER_PROFILES = gql`
    query GetAllProfileByUserId($userId: ID!) {
        getAllProfileByUserId(userId: $userId) {
            id
            userId
            name
            avatar
            status
            type
            password
            description
        }
    }
`

export const CREATE_USER_PROFILE = gql`
    mutation CreateProfile(
        $userId: ID!
        $name: String
        $avatar: String
        $status: String
        $description: String
        $password: String
        $type: String!
    ) {
        createProfile(
            profile: {
                userId: $userId
                name: $name
                avatar: $avatar
                status: $status
                description: $description
                password: $password
                type: $type
            }
        ) {
            id
            userId
            name
            avatar
            status
            type
            password
            description
        }
    }
`

export const UPDATE_USER_PROFILE = gql`
    mutation UpdateProfile(
        $id: ID!
        $userId: ID!
        $name: String
        $avatar: String
        $status: String
        $description: String
        $password: String
        $type: String!
    ) {
        updateProfile(
            profileId: $id
            profile: {
                name: $name
                avatar: $avatar
                status: $status
                description: $description
                password: $password
                type: $type
                userId: $userId
            }
        )
    }
`
