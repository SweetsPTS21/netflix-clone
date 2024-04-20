import React from 'react'
import { Col, Row } from 'antd'
import PropTypes from 'prop-types'

const MovieInfo = ({ movie }) => {
    return (
        <Row gutter={16} className={'mt-4'}>
            <Col span={16}>
                <h1 className={'text-3xl font-semibold text-white mb-4'}>
                    {movie?.title}
                </h1>
                <div className={'flex gap-4 text-white font-semibold'}>
                    <div className={'flex gap-2'}>
                        <span>98% Match</span>
                        <span>{movie?.year}</span>
                        <span>{movie?.rated}</span>
                        <span>{movie?.runtime}</span>
                    </div>
                    <div className={'flex gap-2'}>
                        {movie?.genre?.split(', ').map((genre, index) => (
                            <span key={index}>{genre}</span>
                        ))}
                    </div>
                </div>
                <p className={'text-white mt-4'}>{movie?.plot}</p>
            </Col>
            <Col span={8}>
                <div className={'flex flex-col gap-4 text-white'}>
                    <div className={'flex gap-4 text-sm'}>
                        <span>Cast: </span>
                        <span>{movie?.actors}</span>
                    </div>
                    <div className={'flex gap-4 text-sm'}>
                        <p>Genres: {movie?.genre}</p>
                    </div>
                    <div className={'flex gap-4 text-sm'}>
                        <p>This movie is: Imaginative, Exiting</p>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.object
}

MovieInfo.defaultProps = {
    movie: {}
}

export default MovieInfo
