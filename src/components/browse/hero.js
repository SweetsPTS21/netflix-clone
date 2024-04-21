import React from 'react'
import { Button, Layout } from 'antd'
import heroBG from '../../assets/img/hero.jpg'
import heroContent from '../../assets/img/hero2.png'
import { CaretRightFilled, InfoCircleOutlined } from '@ant-design/icons'
import Carousels from './carousel/Carousels'
import PropTypes from 'prop-types'

const BrowseHero = ({
    dataCarousel,
    openMovieDetails,
    setOpenMovieDetails
}) => {
    return (
        <Layout.Content
            className={'bg-[#141414]'}
            style={{
                height: 'calc(100vh - 64px)'
            }}
        >
            <div className={'browse-hero'}>
                <div className={'max-w-[500px]'}>
                    <img src={heroContent} alt={'hero'} />
                    <h2 className={'text-xl text-white mt-4'}>
                        When a young boy vanishes, a small town uncovers a
                        mystery involving secret experiments, terrifying
                        supernatural forces and one strange little girl.
                    </h2>
                </div>
                <div className={'flex gap-4'}>
                    <Button
                        size={'large'}
                        className={'btn-browse-light rounded'}
                    >
                        <div
                            className={'flex items-center justify-center gap-2'}
                        >
                            <CaretRightFilled
                                style={{
                                    fontSize: '1.5rem'
                                }}
                            />
                            <p className={'text-lg font-semibold'}>Play</p>
                        </div>
                    </Button>
                    <Button
                        size={'large'}
                        className={'btn-browse-dark rounded'}
                    >
                        <div
                            className={'flex items-center justify-center gap-2'}
                        >
                            <InfoCircleOutlined
                                style={{
                                    fontSize: '1.5rem'
                                }}
                            />
                            <p className={'text-lg font-semibold'}>More Info</p>
                        </div>
                    </Button>
                </div>
            </div>
            <div className={'carousel-root carousel-container'}>
                <Carousels
                    data={dataCarousel[0]?.data}
                    title={'Match to you'}
                    setOpenModal={setOpenMovieDetails}
                />
            </div>
        </Layout.Content>
    )
}

BrowseHero.propTypes = {
    dataCarousel: PropTypes.object,
    openMovieDetails: PropTypes.bool,
    setOpenMovieDetails: PropTypes.func
}

export default BrowseHero
