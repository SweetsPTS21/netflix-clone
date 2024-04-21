import React from 'react'
import { Button, ConfigProvider, Tooltip } from 'antd'
import {
    ArrowLeftOutlined,
    CaretRightFilled,
    CloseOutlined,
    DownOutlined,
    LikeOutlined,
    MutedOutlined,
    PlusOutlined,
    SoundOutlined
} from '@ant-design/icons'
import PropTypes from 'prop-types'

const BaseButton = ({ onClick, text, icon, style, iconStyle }) => {
    const buttonStyle = {
        width: '2.7rem',
        height: '2.7rem',
        color: 'white',
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        fontWeight: '600',
        borderRadius: '50%',
        textAlign: 'center',
        border: '2px solid hsla(0,0%,100%,.5)',
        background: 'rgba(42,42,42,.6)',
        ...style
    }

    const switchIcon = () => {
        switch (icon) {
            case 'play':
                return <CaretRightFilled style={iconStyle} />
            case 'add':
                return <PlusOutlined style={iconStyle} />
            case 'like':
                return <LikeOutlined style={iconStyle} />
            case 'down':
                return <DownOutlined style={iconStyle} />
            case 'plus':
                return <PlusOutlined style={iconStyle} />
            case 'sound':
                return <SoundOutlined style={iconStyle} />
            case 'mute':
                return <MutedOutlined style={iconStyle} />
            case 'close':
                return <CloseOutlined style={iconStyle} />
            case 'return':
                return <ArrowLeftOutlined style={iconStyle} />
            default:
                return null
        }
    }

    return (
        <Button style={buttonStyle} onClick={onClick}>
            <div className={'flex items-center justify-center gap-2'}>
                {switchIcon()}
                {text}
            </div>
        </Button>
    )
}

const ButtonIcon = ({ icon, text, onClick, tooltip, style, iconStyle }) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        defaultActiveColor: '#fff',
                        defaultHoverBorderColor: '#fff'
                    }
                }
            }}
        >
            {tooltip ? (
                <Tooltip
                    title={tooltip}
                    color={'rgba(109, 109, 110, 0.7)'}
                    overlayInnerStyle={{
                        fontSize: '1.2rem'
                    }}
                >
                    <div>
                        <BaseButton
                            icon={icon}
                            text={text}
                            onClick={onClick}
                            style={style}
                            iconStyle={iconStyle}
                        />
                    </div>
                </Tooltip>
            ) : (
                <BaseButton
                    icon={icon}
                    text={text}
                    onClick={onClick}
                    style={style}
                    iconStyle={iconStyle}
                />
            )}
        </ConfigProvider>
    )
}

BaseButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    icon: PropTypes.string,
    style: PropTypes.object,
    iconStyle: PropTypes.object
}

ButtonIcon.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    tooltip: PropTypes.string,
    style: PropTypes.object,
    iconStyle: PropTypes.object
}

ButtonIcon.defaultProps = {
    icon: '',
    text: '',
    onClick: () => {},
    tooltip: '',
    style: {},
    iconStyle: {
        fontSize: '1.5rem'
    }
}

export default ButtonIcon
