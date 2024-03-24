import React from 'react'
import {
    FacebookFilled,
    InstagramFilled,
    TwitterOutlined,
    YoutubeOutlined
} from '@ant-design/icons'
import { Col, Row } from 'antd'
import { footerItems } from '../../resource/browse/footer'

const BrowseFooter = () => {
    const rows = Math.ceil(footerItems.length / 4)

    return (
        <div
            className={'bg-[#141414]'}
            style={{
                paddingTop: '12vh',
                paddingBottom: '4vh'
            }}
        >
            <div
                className={
                    'flex flex-col justify-center items-center h-full gap-4'
                }
            >
                <div className={'flex gap-4 text-white text-3xl'}>
                    <TwitterOutlined />
                    <YoutubeOutlined />
                    <InstagramFilled />
                    <FacebookFilled />
                </div>
                <div className={'text-[#666666] w-[50%]'}>
                    {[...Array(rows)].map((_, index) => (
                        <Row
                            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                            key={index}
                        >
                            {footerItems
                                .slice(index * 4, (index + 1) * 4)
                                .map((item, index) => (
                                    <Col key={index} span={6}>
                                        <div className={'py-2'}>{item}</div>
                                    </Col>
                                ))}
                        </Row>
                    ))}
                </div>
                <p className={'text-white text-sm'}>
                    © 2024 Netflix Clone by{' '}
                    <a
                        href={'https://github.com/SweetsPTS21'}
                        className={'text-red-500'}
                    >
                        {' '}
                        @swpts
                    </a>
                </p>
            </div>
        </div>
    )
}

export default BrowseFooter
