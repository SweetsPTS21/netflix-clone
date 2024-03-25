import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'

const About = ({ movie }) => {
    return (
        <div className={'flex flex-col gap-3 text-[#d2d2d2] my-4'}>
            <h1 className={'text-3xl'}>The Witcher</h1>
            <Typography.Text className={'text-[#d2d2d2]'}>
                <span className={'about-label'}>Director</span>
                {': '}
                <span>Christopher Nolan</span>
            </Typography.Text>
            <Typography.Text className={'text-[#d2d2d2]'}>
                <span className={'about-label'}>Actor</span>
                {': '}
                Tom Cruise, Tom Hardy, Tom Holland, Miles Teller, Jennifer
                Lawrence, Glenn Close Jennifer Lawrence, Glenn Close
            </Typography.Text>
            <Typography.Text className={'text-[#d2d2d2]'}>
                <span className={'about-label'}>Genres</span>
                {': '}
                Action, Adventure, Sci-Fi, Thriller
            </Typography.Text>
            <Typography.Text className={'text-[#d2d2d2]'}>
                <span className={'about-label'}>Country</span>
                {': '}
                USA
            </Typography.Text>
            <Typography.Text className={'text-[#d2d2d2]'}>
                <span className={'about-label'}>Classification</span>
                {': '}
                PG-13, 13+
            </Typography.Text>
        </div>
    )
}

About.propTypes = {
    movie: PropTypes.object
}
export default About
