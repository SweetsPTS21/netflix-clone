import React from 'react'
import { BackTop, Button, Layout, Select } from 'antd'
import rootBG from './asset/img/rootBG.jpg'
import mainLogo from './asset/icon/logo.png'
import homeContent1 from './asset/img/home-content-1.png'
import homeContent2 from './asset/img/home-content-2.jpg'
import homeContent3 from './asset/img/home-content-3.jpg'
import homeContent4 from './asset/img/home-content-4.png'
import { ArrowDownOutlined } from '@ant-design/icons'
import HomeQuestion from './components/home/question'
import HomeHeader from './components/home/header'

const RootPage = () => {
    const content = [
        {
            id: 1,
            title: 'Thưởng thức trên TV của bạn',
            description:
                'Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.',
            image: homeContent1
        },
        {
            id: 2,
            title: 'Tải xuống nội dung để xem ngoại tuyến',
            description:
                'Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem.',
            image: homeContent2
        },
        {
            id: 3,
            title: 'Xem ở mọi nơi',
            description:
                'Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV.',
            image: homeContent3
        },
        {
            id: 4,
            title: 'Tạo hồ sơ cho trẻ em',
            description:
                'Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn.',
            image: homeContent4
        }
    ]

    return (
        <div className={'root-layout'}>
            <div className={'root-bg'}></div>
            <Layout
                className={'layout-bg'}
                style={{
                    backgroundImage: `url(${rootBG})`
                }}
            >
                <HomeHeader />
                <Layout.Content className={'main-layout'}>
                    <div className={'flex justify-between w-full h-full'}>
                        <div
                            className={
                                'flex flex-col gap-4 text-white items-center w-full pt-[20%]'
                            }
                        >
                            <h1
                                className={
                                    'text-5xl font-extrabold text-center'
                                }
                            >
                                Chương trình truyền hình, phim không giới hạn và
                                nhiều nội dung khác
                            </h1>
                            <h2 className={'text-2xl font-medium'}>
                                Xem ở mọi nơi. Hủy bất kỳ lúc nào.
                            </h2>
                            <p className={'text-lg font-semibold'}>
                                Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc
                                kích hoạt lại tư cách thành viên của bạn.
                            </p>
                            <div className={'flex gap-4'}>
                                <input
                                    type={'text'}
                                    placeholder={'Địa chỉ email'}
                                    className={
                                        'w-[400px] h-[50px] px-4 rounded-md text-black'
                                    }
                                />
                                <Button
                                    type={'primary'}
                                    className={
                                        'text-white px-4 rounded-md h-full text-2xl'
                                    }
                                >
                                    Bắt đầu
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Button
                        type={'text'}
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
                {content?.map((item) => {
                    return (
                        <div key={item?.index} className={'root-content'}>
                            <div
                                className={'flex items-center'}
                                style={{ maxWidth: '65%', margin: '0 auto' }}
                            >
                                <div className={'flex flex-col gap-4 w-1/2'}>
                                    <h1
                                        className={
                                            'text-5xl font-bold text-white'
                                        }
                                    >
                                        {item.title}
                                    </h1>
                                    <p
                                        className={
                                            'text-2xl font-light text-white'
                                        }
                                    >
                                        {item.description}
                                    </p>
                                </div>
                                <div className={'w-1/2'}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={'w-full h-full'}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={'flex flex-col gap-2'} id={'home-question'}>
                <div className={'flex justify-center root-content'}>
                    <HomeQuestion />
                </div>
            </div>
            <BackTop />
        </div>
    )
}

export default RootPage
