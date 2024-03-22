import React from 'react'
import { CheckCircleOutlined, CheckOutlined } from '@ant-design/icons'
import { benefits } from '../../../resource/signup/signup'

const Step3 = () => {
    return (
        <div className={'flex flex-col items-center text-center gap-4'}>
            <CheckCircleOutlined className={'text-5xl text-[#E50914FF] my-4'} />
            <p className={'text-3xl mb-4'}>Chọn gói dịch vụ của bạn.</p>
            <div className={'flex flex-col items-start gap-4'}>
                {benefits.map((benefit) => (
                    <div
                        className={'flex gap-4 items-center'}
                        key={benefit.index}
                    >
                        <CheckOutlined
                            className={'text-2xl text-[#E50914FF]'}
                        />
                        <p className={'text-lg text-left'}>{benefit.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Step3
