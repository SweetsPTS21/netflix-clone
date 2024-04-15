import React, { useEffect } from 'react'
import { ConfigProvider, Layout } from 'antd'
import Header from '../layout/header'
import rootBG from '../../assets/img/rootBG.jpg'
import HomeFooter from '../layout/footer'
import LoginContent from './content'
import { useSelector } from 'react-redux'

const LoginPage = () => {
    const { loginSuccess } = useSelector((state) => state.loginReducer)

    useEffect(() => {
        if (loginSuccess) {
            window.location.href = '/browse'
        }
    }, [loginSuccess])

    return (
        !loginSuccess && (
            <ConfigProvider
                theme={{
                    components: {
                        Input: {
                            hoverBorderColor: 'white',
                            hoverBg: 'rgba(22, 22, 22, 0.7)',
                            activeBg: 'rgba(22, 22, 22, 0.7)',
                            activeBorderColor: 'white'
                        }
                    },
                    token: {
                        colorErrorBg: 'rgba(22, 22, 22, 0.7)',
                        colorErrorBgHover: 'rgba(22, 22, 22, 0.7)',
                        colorTextPlaceholder: 'rgba(128, 128, 128, 0.7)'
                    }
                }}
            >
                <div className={'root-bg'}></div>
                <div
                    className={'root-image'}
                    style={{
                        height: 'calc(100vh + 344px)',
                        backgroundImage: `url(${rootBG})`
                    }}
                ></div>
                <Layout
                    style={{
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Header type={'login'} width={'75%'} />
                    <LoginContent />
                </Layout>
                <div
                    className={'relative flex justify-center pt-12 pb-12'}
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.9)'
                    }}
                >
                    <HomeFooter bgColor={'transparent'} zIndex={10} />
                </div>
            </ConfigProvider>
        )
    )
}

export default LoginPage
