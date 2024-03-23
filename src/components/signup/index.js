import React from 'react'
import { Layout } from 'antd'
import Header from '../layout/header'
import SignupContent from './content'
import HomeFooter from '../layout/footer'

const SignupPage = () => {
    return (
        <div>
            <div className={'signup-root'}></div>
            <Layout className={'w-full'}>
                <Header type={'signup'} width={'100%'} bgColor={'#fff'} />
                <SignupContent />
            </Layout>
            <div
                className={
                    'relative flex justify-center pt-12 pb-12 bg-[#f5f5f5]'
                }
            >
                <HomeFooter
                    color={'black'}
                    bgColor={'transparent'}
                    zIndex={10}
                />
            </div>
        </div>
    )
}

export default SignupPage
