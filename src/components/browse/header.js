import React from 'react'
import { Dropdown, Layout } from 'antd'
import { BellOutlined, SearchOutlined } from '@ant-design/icons'
import { listItems } from '../../resource/browse/listItems'
import mainLogo from '../../assets/icon/logo.png'
import { Link } from 'react-router-dom'

const BrowseHeader = () => {
    const items = [...listItems]

    return (
        <Layout.Header
            style={{
                height: 'max-content',
                backgroundColor: 'rgba(0,0,0,.8)',
                boxShadow: '0 1px 4px rgba(0,21,41,.08)',
                zIndex: 1000
            }}
        >
            <div className={'w-full h-16 flex items-center'}>
                <div className={'w-[120px] h-full mr-6'}>
                    <Link to={'/'}>
                        <img
                            src={mainLogo}
                            alt={'Netflix logo'}
                            className={'w-full h-full cursor-pointer'}
                        />
                    </Link>
                </div>
                <div className={'flex flex-1 justify-between'}>
                    <div className={'flex items-center gap-5 ml-4 text-white'}>
                        <span className={'nav-item'}>Home</span>
                        <span className={'nav-item'}>TV Shows</span>
                        <span className={'nav-item'}>Movies</span>
                        <span className={'nav-item'}>New & Popular</span>
                        <span className={'nav-item'}>My List</span>
                        <span className={'nav-item'}>Browse By Languages</span>
                    </div>
                    <div className={'flex items-center gap-5 mr-4 text-white'}>
                        <span className={'nav-item'}>
                            <SearchOutlined
                                style={{
                                    fontSize: '1.5rem'
                                }}
                            />
                        </span>
                        <span className={'nav-item'}>
                            <BellOutlined
                                style={{
                                    fontSize: '1.5rem'
                                }}
                            />
                        </span>
                        <span className={'nav-item'}>
                            <Dropdown menu={{ items }}>
                                <img
                                    src={
                                        'https://randomuser.me/api/portraits/med/men/75.jpg'
                                    }
                                    alt={'User profile'}
                                    className={'h-8 w-8 rounded-full'}
                                />
                            </Dropdown>
                        </span>
                    </div>
                </div>
            </div>
        </Layout.Header>
    )
}

export default BrowseHeader
