import React from 'react'
import { Col, Row } from 'antd'

const MovieInfo = () => {
    return (
        <Row gutter={16}>
            <Col span={16}>
                <h1 className={'text-3xl font-semibold text-white'}>
                    The Witcher
                </h1>
                <div className={'flex gap-4'}>
                    <div className={'flex gap-2'}>
                        <span className={'text-white font-semibold'}>
                            98% Match
                        </span>
                        <span className={'text-white font-semibold'}>2020</span>
                        <span className={'text-white font-semibold'}>18+</span>
                        <span className={'text-white font-semibold'}>
                            1 Season
                        </span>
                    </div>
                    <div className={'flex gap-2'}>
                        <span className={'text-white font-semibold'}>
                            Sci-Fi
                        </span>
                        <span className={'text-white font-semibold'}>
                            Fantasy
                        </span>
                        <span className={'text-white font-semibold'}>
                            TV Show
                        </span>
                    </div>
                </div>
                <p className={'text-white mt-4'}>
                    The Witcher is an American fantasy drama streaming
                    television series produced by Lauren Schmidt Hissrich. It is
                    based on the book series of the same name by Polish writer
                    Andrzej Sapkowski.
                </p>
            </Col>
            <Col span={8}>
                <div className={'flex flex-col gap-4 text-white'}>
                    <div className={'flex gap-4 text-sm'}>
                        <p>Cast: Van A, Van B, Van C</p>
                    </div>
                    <div className={'flex gap-4 text-sm'}>
                        <p>
                            Genres: Sci-fi TV, Action TV, Adventure, US TV Show
                        </p>
                    </div>
                    <div className={'flex gap-4 text-sm'}>
                        <p>This movie is: Imaginative, Exiting</p>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default MovieInfo
