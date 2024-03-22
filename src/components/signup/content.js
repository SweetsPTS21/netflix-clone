import React, { useState } from 'react'
import { Button, Layout, Popover, Steps, theme, message } from 'antd'
import PropTypes from 'prop-types'
import Step1 from './steps/step1'
import Step2 from './steps/step2'
import Step3 from './steps/step3'
import SignupPlans from './plans'

const customDot = (dot, { status, index }) => (
    <Popover
        content={
            <span>
                step {index} status: {status}
            </span>
        }
    >
        {dot}
    </Popover>
)

const signupContent = [
    {
        title: 'Bước 1',
        content: <Step1 />
    },
    {
        title: 'Bước 2',
        content: <Step2 />
    },
    {
        title: 'Bước 3',
        content: <Step3 />
    }
]

const SignupContent = (props) => {
    const { token } = theme.useToken()
    const [current, setCurrent] = useState(0)
    const [completed, setCompleted] = useState(false)

    const next = () => {
        setCurrent(current + 1)
    }
    const prev = () => {
        setCurrent(current - 1)
    }

    const items = signupContent.map((item) => ({
        key: item.title,
        title: item.title
    }))

    return (
        <Layout.Content
            style={{
                backgroundColor: props?.bgColor
            }}
        >
            <div className={'flex justify-center items-center'}>
                {current < signupContent.length && (
                    <div
                        className={
                            'bg-white pt-5 px-8 pb-16 m-auto max-w-[500px]'
                        }
                    >
                        <Steps
                            current={current}
                            progressDot={customDot}
                            items={items}
                        />

                        <div>{signupContent[current].content}</div>

                        <div
                            style={{
                                marginTop: 24
                            }}
                        >
                            {current < signupContent.length - 1 && (
                                <Button
                                    size={'large'}
                                    type="primary"
                                    onClick={() => next()}
                                >
                                    Next
                                </Button>
                            )}
                            {current === signupContent.length - 1 && (
                                <Button
                                    size={'large'}
                                    type="primary"
                                    onClick={() => {
                                        next()
                                        setCompleted(true)
                                    }}
                                >
                                    Done
                                </Button>
                            )}
                            {current > 0 && (
                                <Button
                                    size={'large'}
                                    style={{
                                        margin: '0 8px'
                                    }}
                                    onClick={() => prev()}
                                >
                                    Previous
                                </Button>
                            )}
                        </div>
                    </div>
                )}
                {completed && <SignupPlans />}
            </div>
        </Layout.Content>
    )
}

SignupContent.propTypes = {
    bgColor: PropTypes.string
}

SignupContent.defaultProps = {
    bgColor: '#fff'
}

export default SignupContent
