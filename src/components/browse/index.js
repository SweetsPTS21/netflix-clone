import React from 'react'
import { ConfigProvider, Layout } from 'antd'
import BrowseHeader from './header'
import BrowseHero from './hero'
import BrowseContent from './content'
import BrowseFooter from './footer'

const Browse = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        defaultHoverBg: 'rgba(0, 0, 0, 0.5)',
                        defaultActiveBg: 'rgba(0, 0, 0, 0.5)',
                        defaultActiveBorderColor: 'rgba(109, 109, 110, 0.9)',
                        defaultHoverBorderColor: 'rgba(109, 109, 110, 0.9)',
                        defaultActiveColor: '#fff',
                        defaultHoverColor: '#fff'
                    },
                    Card: {
                        actionsBg: '#141414'
                    }
                },
                token: {
                    padding: 0
                }
            }}
        >
            <Layout>
                <BrowseHeader />
                <BrowseHero />
                <BrowseContent />
                <BrowseFooter />
            </Layout>
        </ConfigProvider>
    )
}

export default Browse
