import React, { useEffect, useRef } from 'react'
import YouTube from 'react-youtube'
import PropTypes from 'prop-types'
import { useBrowseContext } from '../../context/browseContext'

const YoutubeTrailer = ({ videoId, ...props }) => {
    const playerRef = useRef(null)
    const { trailerPlaying } = useBrowseContext()

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

    // Access the player object and store in ref on ready
    const onPlayerReady = (event) => {
        playerRef.current = event.target
    }

    useEffect(() => {
        if (!trailerPlaying) {
            handlePause()
        }
    }, [trailerPlaying])

    return (
        <YouTube
            videoId={videoId}
            opts={{
                playerVars: {
                    autoplay: 0, // Set autoplay to 0 to disable autoplay
                    controls: 1 // Show controls
                }
            }}
            onReady={onPlayerReady}
            {...props}
        />
    )
}

YoutubeTrailer.propTypes = {
    videoId: PropTypes.string.isRequired
}

YoutubeTrailer.defaultProps = {
    videoId: 'ndl1W4ltcmg'
}

export default YoutubeTrailer
