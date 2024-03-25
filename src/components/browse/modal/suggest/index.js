import React from 'react'
import { Card, Col, Row, Space, Typography } from 'antd'
import { episodes } from '../../../../resource/browse/episodes'
import CardCover from './CardCover'
import CardDes from './CardDes'

const Suggest = () => {
    const rows = Math.ceil(episodes.length / 3)

    return (
        <div>
            <h1 className={'text-white text-2xl mt-8'}>More like this</h1>
            <Space size={24} direction={'vertical'} className={'mt-4'}>
                {Array.from({ length: rows }).map((_, index) => (
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }} key={index}>
                        {episodes
                            .slice(index * 3, index * 3 + 3)
                            .map((episode, index) => (
                                <Col span={8} key={index}>
                                    <Card
                                        className={'suggest-item'}
                                        hoverable={true}
                                        bordered={false}
                                        cover={<CardCover episode={episode} />}
                                    >
                                        <Card.Meta
                                            title={
                                                <Typography
                                                    className={
                                                        'text-[#d2d2d2] pt-4 px-4 truncate'
                                                    }
                                                >
                                                    {episode.title}
                                                </Typography>
                                            }
                                            description={
                                                <CardDes episode={episode} />
                                            }
                                        />
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                ))}
            </Space>
        </div>
    )
}

export default Suggest
