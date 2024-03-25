import React from 'react'
import { Card, Col, Row, Space, Typography } from 'antd'
import witcher from '../../../assets/img/witcher.jpg'
import { episodes } from '../../../resource/browse/episodes'
import ButtonIcon from '../../../custom/button/ButtonIcon'

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
                                        cover={
                                            <img
                                                src={witcher}
                                                alt={'movie'}
                                                className={'w-full rounded-lg'}
                                            />
                                        }
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
                                                <div
                                                    className={
                                                        'flex flex-col p-4 gap-2 text-[#d2d2d2]'
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            'flex gap-2 justify-between items-center'
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                'flex gap-2'
                                                            }
                                                        >
                                                            <p>
                                                                {
                                                                    episode.episode
                                                                }{' '}
                                                                episode
                                                            </p>
                                                            <p>
                                                                {
                                                                    episode.duration
                                                                }
                                                            </p>
                                                            <p>
                                                                {episode.date}
                                                            </p>
                                                        </div>
                                                        <ButtonIcon
                                                            icon={'plus'}
                                                            onClick={() => {}}
                                                        />
                                                    </div>
                                                    <Typography.Paragraph
                                                        ellipsis={{
                                                            rows: 5
                                                        }}
                                                        className={
                                                            'text-sm text-[#d2d2d2]'
                                                        }
                                                    >
                                                        {episode.description}
                                                    </Typography.Paragraph>
                                                </div>
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
