import React, { useEffect, useState } from 'react'
import { ConfigProvider, Layout } from 'antd'
import BrowseHeader from './header'
import BrowseHero from './hero'
import BrowseContent from './content'
import BrowseFooter from './footer'
import { carousels } from '../../resource/browse/carousel'
import heroBG from '../../assets/img/hero.jpg'
import BrowseContextProvider from '../../context/browseContext'

const Browse = () => {
    const [openMovieDetails, setOpenMovieDetails] = useState(null)

    return (
        <BrowseContextProvider>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            defaultHoverBg: 'rgba(0, 0, 0, 0.5)',
                            defaultActiveBg: 'rgba(0, 0, 0, 0.5)',
                            defaultActiveBorderColor:
                                'rgba(109, 109, 110, 0.9)',
                            defaultHoverBorderColor: 'rgba(109, 109, 110, 0.9)',
                            defaultActiveColor: '#fff',
                            defaultHoverColor: '#fff'
                        },
                        Card: {
                            actionsBg: '#141414'
                        },
                        Modal: {
                            contentBg: '#181818',
                            headerBg: '#181818',
                            titleColor: 'white'
                        }
                    },
                    token: {
                        padding: 0
                    }
                }}
            >
                <div
                    className={'browse-bg hero-image'}
                    style={{
                        backgroundImage: `url(${heroBG})`
                    }}
                ></div>
                <Layout>
                    <BrowseHeader />
                    <BrowseHero
                        dataCarousel={carousels}
                        openMovieDetails={openMovieDetails}
                        setOpenMovieDetails={setOpenMovieDetails}
                    />
                    <BrowseContent
                        dataCarousels={carousels}
                        openMovieDetails={openMovieDetails}
                        setOpenMovieDetails={setOpenMovieDetails}
                    />
                    <BrowseFooter />
                </Layout>
            </ConfigProvider>
        </BrowseContextProvider>
    )
}

export default Browse
