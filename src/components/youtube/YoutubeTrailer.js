import React, { useEffect, useRef } from 'react'
import YouTube from 'react-youtube'
import PropTypes from 'prop-types'
import { useBrowseContext } from '../../context/browseContext'

const YoutubeTrailer = ({ videoId, opts, ...props }) => {
    const playerRef = useRef(null)
    const { trailerPlaying, trailerMuted } = useBrowseContext()

    const handlePlay = () => {
        if (playerRef.current) {
            playerRef.current.playVideo()
        }
    }

    const handlePause = () => {
        if (playerRef.current) {
            playerRef.current.pauseVideo()
        }
    }

    const handleMute = () => {
        if (playerRef.current) {
            playerRef.current.mute()
        }
    }

    const handleUnmute = () => {
        if (playerRef.current) {
            playerRef.current.unMute()
        }
    }

    // Access the player object and store in ref on ready
    const onPlayerReady = (event) => {
        playerRef.current = event.target
    }

    useEffect(() => {
        if (!trailerPlaying) {
            handlePause()
        }
    }, [trailerPlaying])

    useEffect(() => {
        if (
            trailerMuted &&
            playerRef.current &&
            playerRef.current.isMuted() === false
        ) {
            handleMute()
        } else if (
            !trailerMuted &&
            playerRef.current &&
            playerRef.current.isMuted() === true
        ) {
            handleUnmute()
        }
    }, [trailerMuted])

    return (
        <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onPlayerReady}
            {...props}
        />
    )
}

YoutubeTrailer.propTypes = {
    videoId: PropTypes.string.isRequired,
    opts: PropTypes.object
}

YoutubeTrailer.defaultProps = {
    videoId: 'ndl1W4ltcmg',
    opts: {
        height: '512',
        width: '850',
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            disablekb: 1,
            iv_load_policy: 3
        }
    }
}

export default YoutubeTrailer
