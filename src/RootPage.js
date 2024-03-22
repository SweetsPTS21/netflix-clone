import React from 'react'
import { Button, ConfigProvider, FloatButton, Layout } from 'antd'
import rootBG from './asset/img/rootBG.jpg'
import { ArrowDownOutlined } from '@ant-design/icons'
import Header from './components/layout/header'
import HomeSubscribe from './components/home/subscribe'
import HomeContent from './components/home/content'
import HomeQuestion from './components/home/question'
import HomeFooter from './components/layout/footer'

const themeConfig = {
    components: {
        Input: {
            hoverBorderColor: '#ffffff',
            hoverBg: 'rgba(22, 22, 22, 0.7)',
            activeBg: 'rgba(22, 22, 22, 0.7)',
            activeBorderColor: '#ffffff'
        },
        Button: {
            textPrimaryColor: '#ffffff',
            textPrimaryBg: 'rgba(229, 9, 20, 1)',
            textPrimaryHoverBg: 'rgba(229, 9, 20, 0.8)',
            textPrimaryActiveBg: 'rgba(229, 9, 20, 0.8)',
            textPrimaryActiveColor: '#ffffff'
        },
        Select: {
            colorBorder: 'rgba(128, 128, 128, 0.7)',
            selectorBg: 'rgba(22, 22, 22, 0.7)',
            optionActiveBg: 'rgba(22, 22, 22, 0.7)',
            optionSelectedColor: '#000000'
        }
    },
    token: {
        colorTextPlaceholder: 'rgba(128, 128, 128, 0.7)'
    }
}

const RootPage = () => {
    return (
        <ConfigProvider theme={themeConfig}>
            <div className={'root-layout'}>
                <div className={'root-bg'}></div>
                <div
                    className={'root-image'}
                    style={{
                        height: '100vh',
                        backgroundImage: `url(${rootBG})`
                    }}
                ></div>
                <Layout className={'layout-bg'}>
                    <Header type={'home'} width={'75%'} />
                    <Layout.Content
                        className={'main-layout'}
                        style={{ width: '75%' }}
                    >
                        <div className={'flex justify-between w-full h-full'}>
                            <div
                                className={
                                    'flex flex-col gap-4 text-white items-center justify-center w-full text-center'
                                }
                            >
                                <h1 className={'text-5xl font-extrabold'}>
                                    Chương trình truyền hình, phim không giới
                                    hạn và nhiều nội dung khác
                                </h1>
                                <h2 className={'text-2xl font-medium'}>
                                    Xem ở mọi nơi. Hủy bất kỳ lúc nào.
                                </h2>
                                <HomeSubscribe />
                            </div>
                        </div>
                        <Button
                            className={'scroll-down-button'}
                            onClick={() => {
                                document
                                    .getElementById('home-content')
                                    .scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            <ArrowDownOutlined className={'text-2xl'} />
                        </Button>
                    </Layout.Content>
                </Layout>
                <div
                    className={'flex flex-col gap-2 items-center'}
                    id={'home-content'}
                >
                    <HomeContent />
                </div>
                <div className={'flex justify-center root-content'}>
                    <HomeQuestion />
                </div>
                <div className={'flex justify-center root-content'}>
                    <HomeFooter />
                </div>
                <FloatButton.BackTop />
            </div>
        </ConfigProvider>
    )
}

export default RootPage
