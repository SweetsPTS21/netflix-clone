import React from 'react'
import { Layout } from 'antd'
import Carousels from './carousel/Carousels'
import { carousels } from '../../resource/browse/carousel'

const BrowseContent = () => {
    return (
        <Layout.Content className={'bg-[#141414] h-max'}>
            {carousels.map((carousel, index) => (
                <div
                    key={index}
                    style={{
                        marginTop: '3vh'
                    }}
                >
                    <Carousels title={carousel.title} data={carousel.data} />
                </div>
            ))}
        </Layout.Content>
    )
}

export default BrowseContent
