import { Card, Tooltip } from 'antd'
import witcher from '../../../asset/img/witcher.jpg'
import {
    DownCircleOutlined,
    LikeOutlined,
    PlayCircleFilled,
    PlusOutlined
} from '@ant-design/icons'
import React from 'react'
const CarouselPopover = ({ movie }) => {
    return (
        <div className={'w-44 movie-details'}>
            <Card
                bordered={false}
                className={'w-full h-full rounded carousel-card'}
                cover={
                    <img
                        src={witcher}
                        className={'w-full h-full'}
                        alt={movie?.content}
                    />
                }
                actions={[
                    <div className={'flex justify-between'}>
                        <div
                            className={
                                'flex items-center gap-2 text-white px-2 text-lg font-semibold'
                            }
                        >
                            <PlayCircleFilled />
                            <Tooltip
                                title={'Add to My List'}
                                color={'rgba(109, 109, 110, 0.7)'}
                                overlayInnerStyle={{
                                    fontSize: '1.2rem'
                                }}
                            >
                                <PlusOutlined />
                            </Tooltip>
                            <Tooltip
                                title={'I Like It'}
                                color={'rgba(109, 109, 110, 0.7)'}
                                overlayInnerStyle={{
                                    fontSize: '1.2rem'
                                }}
                            >
                                <LikeOutlined />
                            </Tooltip>
                        </div>
                        <div
                            className={'text-white px-2 text-lg font-semibold'}
                        >
                            <Tooltip
                                title={'Episodes & Info'}
                                color={'rgba(109, 109, 110, 0.7)'}
                                overlayInnerStyle={{
                                    fontSize: '1.2rem'
                                }}
                            >
                                <DownCircleOutlined />
                            </Tooltip>
                        </div>
                    </div>
                ]}
            >
                <Card.Meta
                    description={
                        <div className={'flex flex-col p-2 text-white'}>
                            <div className={'text-sm'}>{movie?.name}</div>
                            <div
                                style={{
                                    display: 'flex',
                                    fontSize: '0.5rem'
                                }}
                            >
                                <p>Comedy</p>
                                <p className={'mx-1'}>•</p>
                                <p>2021</p>
                                <p className={'mx-1'}>•</p>
                                <p>HD</p>
                            </div>
                        </div>
                    }
                />
            </Card>
        </div>
    )
}

export default CarouselPopover
