import React, { useState } from 'react'
import witcher from '../../../assets/img/witcher.jpg'
import { episodes } from '../../../resource/browse/episodes'
import ButtonIcon from '../../../custom/button/ButtonIcon'

const Episodes = () => {
    const [currentEpisode, setCurrentEpisode] = useState(null)

    const onMouseOver = (episode) => {
        setCurrentEpisode(episode)
    }

    const onMouseLeave = () => {
        setCurrentEpisode(null)
    }

    return (
        <div>
            <h1 className={'text-white text-2xl mt-8'}>Episodes</h1>
            <div className={'flex gap-4 mt-4'}>
                <div className={'episode-container'}>
                    {episodes.map((episode, index) => (
                        <div key={index} className={'flex gap-4'}>
                            <div
                                className={'relative'}
                                onMouseOver={() => onMouseOver(episode)}
                                onMouseLeave={() => onMouseLeave()}
                            >
                                <img
                                    src={witcher}
                                    alt={'movie'}
                                    className={
                                        'max-w-[10rem] h-[6rem] rounded-lg'
                                    }
                                />
                                {episode?.id === currentEpisode?.id && (
                                    <div
                                        className={
                                            'absolute top-[26%] left-[30%]'
                                        }
                                    >
                                        <ButtonIcon
                                            icon={'play'}
                                            onClick={() => {}}
                                        />
                                    </div>
                                )}
                            </div>
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
