import React from 'react'
import witcher from '../../../assets/img/witcher.jpg'
import { episodes } from '../../../resource/browse/episodes'

const Episodes = () => {
    return (
        <div>
            <h1 className={'text-white text-2xl mt-8'}>Episodes</h1>
            <div className={'flex gap-4 mt-4'}>
                <div className={'episode-container'}>
                    {episodes.map((episode, index) => (
                        <div key={index} className={'flex gap-4'}>
                            <img
                                src={witcher}
                                alt={'movie'}
                                className={'w-[10rem] h-[6rem] rounded-lg'}
                            />
                            <div>
                                <h1 className={'text-white'}>
                                    {episode.title}
                                </h1>
                                <p className={'text-white'}>
                                    {episode.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Episodes
