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
