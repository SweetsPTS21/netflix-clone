import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { useBrowseContext } from '../../context/browseContext'
import { AMAZON_S3_BUCKET } from '../../config/Url'
import Control from './control/control'
import { formatTime } from './control/utils'

const MoviePlayer = () => {
    const { playerRef } = useBrowseContext()
    const [videoState, setVideoState] = useState({
        playing: true,
        muted: false,
        volume: 0.5,
        played: 0,
        seeking: false,
        Buffer: true
    })
    const { playing, muted, volume, playbackRate, played, seeking, buffer } =
        videoState
    const videoPlayerRef = useRef(null)

    const currentTime = videoPlayerRef.current
        ? videoPlayerRef.current.getCurrentTime()
        : '00:00'
    const duration = videoPlayerRef.current
        ? videoPlayerRef.current.getDuration()
        : '00:00'

    const formatCurrentTime = formatTime(currentTime)
    const formatDuration = formatTime(duration)

    const playPauseHandler = () => {
        //plays and pause the video (toggling)
        setVideoState({ ...videoState, playing: !videoState.playing })
    }

    const rewindHandler = () => {
        //Rewinds the video player reducing 5
        videoPlayerRef.current.seekTo(
            videoPlayerRef.current.getCurrentTime() - 5
        )
    }

    const fastFowardHandler = () => {
        //FastFowards the video player by adding 10
        videoPlayerRef.current.seekTo(
            videoPlayerRef.current.getCurrentTime() + 10
        )
    }

    const progressHandler = (state) => {
        if (!seeking) {
            setVideoState({ ...videoState, ...state })
        }
    }

    const seekHandler = (value) => {
        setVideoState({ ...videoState, played: parseFloat(value) / 100 })
    }

    const seekMouseUpHandler = (value) => {
        setVideoState({ ...videoState, seeking: false })
        videoPlayerRef.current.seekTo(value / 100)
    }

    const volumeChangeHandler = (value) => {
        const newVolume = parseFloat(value) / 100
        setVideoState({
            ...videoState,
            volume: newVolume,
            muted: Number(newVolume) === 0 // volume === 0 then muted
        })
    }

    const volumeSeekUpHandler = (value) => {
        const newVolume = parseFloat(value) / 100
        setVideoState({
            ...videoState,
            volume: newVolume,
            muted: newVolume === 0
        })
    }

    const muteHandler = () => {
        //Mutes the video player
        setVideoState({ ...videoState, muted: !videoState.muted })
    }

    const bufferStartHandler = () => {
        console.log('Bufering.......')
        setVideoState({ ...videoState, buffer: true })
    }

    const bufferEndHandler = () => {
        console.log('buffering stoped ,,,,,,play')
        setVideoState({ ...videoState, buffer: false })
    }

    return (
        <div
            className="absolute top-[63px] z-40"
            style={{
                width: 'calc(100vw - 20px)',
                height: 'calc(100vh - 64px)'
            }}
            ref={playerRef}
        >
            <div className={'player-wrapper'}>
                <ReactPlayer
                    ref={videoPlayerRef}
                    url={`${AMAZON_S3_BUCKET}/the+witcher.mp4`}
                    width={'100%'}
                    height={'100%'}
                    controls={false}
                    playing={playing}
                    muted={muted}
                    volume={volume}
                    onProgress={progressHandler}
                    onBuffer={bufferStartHandler}
                    onBufferEnd={bufferEndHandler}
                />
                <Control
                    onPlayPause={playPauseHandler}
                    playing={playing}
                    onRewind={rewindHandler}
                    onForward={fastFowardHandler}
                    played={played}
                    onSeek={seekHandler}
                    onSeekMouseUp={seekMouseUpHandler}
                    volume={volume}
                    onVolumeChangeHandler={volumeChangeHandler}
                    onVolumeSeekUp={volumeSeekUpHandler}
                    muted={muted}
                    onMute={muteHandler}
                    duration={formatDuration}
                    currentTime={formatCurrentTime}
                    buffer={buffer}
                />
            </div>
        </div>
    )
}

export default MoviePlayer
