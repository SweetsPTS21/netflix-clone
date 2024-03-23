import React from 'react'
import { homeContent } from '../../resource/home/home'

const HomeContent = () => {
    return homeContent?.map((item) => {
        return (
            <div key={item?.index} className={'root-content'}>
                <div
                    className={'flex items-center'}
                    style={{ maxWidth: '65%', margin: '0 auto' }}
                >
                    <div className={'flex flex-col gap-4 w-1/2'}>
                        <h1 className={'text-5xl font-bold text-white'}>
                            {item.title}
                        </h1>
                        <p className={'text-2xl font-light text-white'}>
                            {item.description}
                        </p>
                    </div>
                    <div className={'w-1/2'}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className={'w-full h-full'}
                        />
                    </div>
                </div>
            </div>
        )
    })
}

export default HomeContent
