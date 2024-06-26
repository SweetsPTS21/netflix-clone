import { Divider } from 'antd'
import React from 'react'

const CardDescription = ({ description }) => {
    return description?.map((item, index) => (
        <div className={'px-4'} key={index}>
            <div key={item.title}>
                <p className={'text-sm text-gray-500'}>{item.title}</p>
                <p className={'text-lg'}>{item.content}</p>
            </div>
            <Divider />
        </div>
    ))
}

export default CardDescription
