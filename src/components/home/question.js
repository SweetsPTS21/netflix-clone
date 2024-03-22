import React from 'react'
import { Collapse } from 'antd'
import HomeSubscribe from './subscribe'
import { homeQuestions } from '../../resource/home/home'

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type
    }
}

const HomeQuestion = (props) => {
    return (
        <div className={'flex flex-col w-[60%] gap-4 justify-center'}>
            <div className={'flex justify-center mb-4'}>
                <h1 className={'text-5xl font-bold text-white text-center'}>
                    Câu hỏi thường gặp
                </h1>
            </div>
            {homeQuestions?.map((item) => {
                return (
                    <Collapse
                        key={item?.key}
                        size={'large'}
                        bordered={false}
                        defaultActiveKey={['1']}
                    >
                        <Collapse.Panel
                            header={item?.label}
                            key={item?.key}
                            className={'text-white'}
                        >
                            {item?.children}
                        </Collapse.Panel>
                    </Collapse>
                )
            })}
            <HomeSubscribe />
        </div>
    )
}

export default HomeQuestion
