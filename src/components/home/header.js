import React from 'react'
import { Button, Layout, Select } from 'antd'
import mainLogo from '../../asset/icon/logo.png'

const HomeHeader = () => {
    return (
        <Layout.Header id={'home-header'} className={'main-layout'}>
            <div className={'flex justify-between items-center'}>
                <div className={'w-[120px] h-[64px]'}>
                    <img
                        src={mainLogo}
                        alt={'Netflix logo'}
                        className={'w-full h-full'}
                    />
                </div>
                <div className={'flex gap-4'}>
                    <Select className={'text-white'} defaultValue={'vi'}>
                        <Select.Option value={'vi'}>Tiếng Việt</Select.Option>
                        <Select.Option value={'en'}>Tiếng Anh</Select.Option>
                    </Select>
                    <Button className={'text-white bg-red-500 px-4'}>
                        Sign In
                    </Button>
                </div>
            </div>
        </Layout.Header>
    )
}

export default HomeHeader
