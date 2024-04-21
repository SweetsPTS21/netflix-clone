import React, { useState } from 'react'
import {
    ArrowLeftOutlined,
    BackwardOutlined,
    CaretRightOutlined,
    ForwardOutlined,
    LoadingOutlined,
    MutedOutlined,
    PauseOutlined,
    SoundOutlined,
    StepForwardOutlined
} from '@ant-design/icons'
import { Button, Flex, Slider, Spin, Typography } from 'antd'
import { useBrowseContext } from '../../../context/browseContext'

const Control = ({
    onPlayPause,
    playing,
    onRewind,
    onForward,
    played,
    onSeek,
    onSeekMouseUp,
    volume,
    onVolumeSeekUp,
    onVolumeChangeHandler,
    muted,
    onMute,
    duration,
    currentTime,
    buffer
}) => {
    const { currentMovie, setMoviePlaying } = useBrowseContext()
    const [isHover, setIsHover] = useState(false)
    const formatterTime = (value) => <span>{currentTime}</span>
    const formatterVolume = (value) => `${value}%`

    const onMouseEnter = () => {
        setIsHover(true)
    }

    const onMouseLeave = () => {
        setIsHover(false)
    }

    return (
        <div
            className={'control-container'}
            style={{
                opacity: isHover ? 1 : 0,
                animation: isHover ? 'fadeIn 0.5s' : 'fadeOut 0.5s'
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Flex gap={'15px'} align={'center'} className={'pt-4 pl-4'}>
                <Button
                    icon={
                        <ArrowLeftOutlined
                            style={{
                                fontSize: 24,
                                color: 'white'
                            }}
                        />
                    }
                    type={'text'}
                    onClick={() => {
                        setMoviePlaying(false)
                    }}
                />
                <Typography.Text className={'text-2xl text-white'}>
                    {currentMovie?.title || 'Movie Title'}
                </Typography.Text>
            </Flex>
            {!buffer ? (
                <div className="mid__container">
                    <div className="icon__btn" onClick={onRewind}>
                        <BackwardOutlined />
                    </div>
                    <div className="icon__btn" onClick={onPlayPause}>
                        {playing ? <PauseOutlined /> : <CaretRightOutlined />}
                    </div>
                    <div className="icon__btn" onClick={onForward}>
                        <ForwardOutlined />
                    </div>
                </div>
            ) : (
                <div className={'buffer-container'}>
                    <Spin
                        spinning={buffer}
                        indicator={
                            <LoadingOutlined
                                style={{
                                    fontSize: 24
                                }}
                                spin
                            />
                        }
                    />
                </div>
            )}
            <div className="bottom__container">
                <div className="slider__container">
                    <Slider
                        className={'w-full'}
                        min={0}
                        max={100}
                        value={played * 100}
                        onChange={onSeek}
                        onChangeComplete={onSeekMouseUp}
                        tooltip={{ formatter: formatterTime }}
                    />
                </div>
                <div className="control__box">
                    <div className="inner__controls">
                        <div className="icon__btn" onClick={onPlayPause}>
                            {playing ? (
                                <PauseOutlined />
                            ) : (
                                <CaretRightOutlined />
                            )}
                        </div>
                        <div className="icon__btn">
                            <StepForwardOutlined />
                        </div>
                        <div className="icon__btn" onClick={onMute}>
                            {muted ? <MutedOutlined /> : <SoundOutlined />}
                        </div>

                        <Slider
                            className={'w-[100px]'}
                            tooltip={{ formatter: formatterVolume }}
                            value={volume * 100}
                            onChange={onVolumeChangeHandler}
                            onChangeComplete={onVolumeSeekUp}
                        />
                        <span className={'text-white ml-4 text-xl'}>
                            {currentTime} : {duration}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Control
