import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'

const About = ({ movie }) => {
    return (
        <div className={'flex flex-col gap-3 text-[#d2d2d2] my-4'}>
            <h1 className={'text-3xl'}>{movie?.title}</h1>
            <Typography.Text className={'text-[#d2d2d2]'}>
                <span className={'about-label'}>Director</span>
                {': '}
                <span>{movie?.director}</span>
            </Typography.Text>
            <Typography.Text className={'text-[#d2d2d2]'}>
                <span className={'about-label'}>Actor</span>
                {': '}
                <span>{movie?.actors}</span>
            </Typography.Text>
            <Typography.Text className={'text-[#d2d2d2]'}>
                <span className={'about-label'}>Genres</span>
                {': '}
                <span>{movie?.genre}</span>
            </Typography.Text>
            <Typography.Text className={'text-[#d2d2d2]'}>
                <span className={'about-label'}>Country</span>
                {': '}
                <span>{movie?.country}</span>
            </Typography.Text>
            <Typography.Text className={'text-[#d2d2d2]'}>
                <span className={'about-label'}>Classification</span>
                {': '}
                <span>{movie?.rated}</span>
            </Typography.Text>
        </div>
    )
}

About.propTypes = {
    movie: PropTypes.object
}
export default About
