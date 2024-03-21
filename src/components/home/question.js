import React, { useEffect, useState } from 'react'
import { Collapse, Menu } from 'antd'

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
    const questions = [
        {
            label: 'What is Netflix?',
            key: '1',
            children:
                "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        },
        {
            label: 'How much does Netflix cost?',
            key: '2',
            children:
                'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from VND180,000 to VND260,000 a month. No extra costs, no contracts.'
        },
        {
            label: 'Where can I watch?',
            key: '3',
            children: (
                <p>
                    Watch anywhere, anytime, on an unlimited number of devices.
                    Sign in with your Netflix account to watch instantly on the
                    web at netflix.com from your personal computer or on any
                    internet-connected device that offers the Netflix app,
                    including smart TVs, smartphones, tablets, streaming media
                    players and game consoles.
                </p>
            )
        },
        {
            label: 'How do I cancel?',
            key: '4',
            children: (
                <p>
                    Netflix is flexible. There are no pesky contracts and no
                    commitments. You can easily cancel your account online in
                    two clicks. There are no cancellation fees – start or stop
                    your account anytime.
                </p>
            )
        },
        {
            label: 'What can I watch on Netflix?',
            key: '5',
            children: (
                <p>
                    Netflix has an extensive library of feature films,
                    documentaries, TV shows, anime, award-winning Netflix
                    originals, and more. Watch as much as you want, anytime you
                    want.
                </p>
            )
        },
        {
            label: 'Is Netflix good for kids?',
            key: '6',
            children: (
                <p>
                    The Netflix Kids experience is included in your membership
                    to give parents control while kids enjoy family-friendly TV
                    shows and movies in their own space.
                </p>
            )
        }
    ]
    return (
        <div className={'flex flex-col w-[80%] gap-4'}>
            {questions?.map((item) => {
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
        </div>
    )
}

export default HomeQuestion
