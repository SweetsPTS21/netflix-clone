import React from 'react'
import { Link } from 'react-router-dom'
import { homeFooter } from '../../resource/home/home'
import PropTypes from 'prop-types'

const HomeFooter = (props) => {
    return (
        <div
            style={{ backgroundColor: props?.bgColor, zIndex: props?.zIndex }}
            className={
                'flex flex-col justify-center items-center w-[80%] gap-4'
            }
        >
            <p
                className={'text-center text-2xl'}
                style={{ color: props?.color }}
            >
                Bạn có câu hỏi? Liên hệ với chúng tôi.
            </p>
            <div className={'flex-wrap inline-flex'}>
                {homeFooter?.map((item) => {
                    return (
                        <Link
                            to={'/'}
                            key={item?.key}
                            className={'mt-4 ml-3 p-0 w-full cursor-pointer'}
                            style={{
                                color: props?.color,
                                flex: '0 0 calc(25% - 0.75em)'
                            }}
                        >
                            {item?.label}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

HomeFooter.propTypes = {
    color: PropTypes.string,
    bgColor: PropTypes.string,
    zIndex: PropTypes.number
}

HomeFooter.defaultProps = {
    color: '#fff',
    bgColor: '#000',
    zIndex: 1
}

export default HomeFooter
