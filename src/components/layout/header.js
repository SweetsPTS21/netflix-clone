import React from 'react'
import { Button, Layout, Select } from 'antd'
import mainLogo from '../../assets/icon/logo.png'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = (props) => {
    const switchType = (value) => {
        switch (value) {
            case 'home':
                return true
            case 'login':
                return false
            default:
                return true
        }
    }

    return (
        <Layout.Header
            id={'home-header'}
            className={'main-layout'}
            style={{
                width: props?.width,
                backgroundColor: props?.bgColor
            }}
        >
            <div className={'flex justify-between items-center'}>
                <div className={'w-[120px] h-[64px]'}>
                    <Link to={'/'}>
                        <img
                            src={mainLogo}
                            alt={'Netflix logo'}
                            className={'w-full h-full cursor-pointer'}
                        />
                    </Link>
                </div>
                {switchType(props?.type) && (
                    <div className={'flex gap-4 items-center'}>
                        {props?.type === 'home' && (
                            <Select defaultValue={'vi'}>
                                <Select.Option value={'vi'}>
                                    Tiếng Việt
                                </Select.Option>
                                <Select.Option value={'en'}>
                                    Tiếng Anh
                                </Select.Option>
                            </Select>
                        )}
                        <Link to={'/login'}>
                            <Button type={'primary'} className={'px-4'}>
                                Đăng nhập
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </Layout.Header>
    )
}
Header.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string,
    bgColor: PropTypes.string
}

Header.defaultProps = {
    type: 'home',
    width: '100%',
    bgColor: 'transparent'
}

export default Header
