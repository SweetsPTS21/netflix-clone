import React, { useEffect, useState } from 'react'
import { Button, Layout, Popover, Steps } from 'antd'
import PropTypes from 'prop-types'
import Step1 from './steps/step1'
import Step2 from './steps/step2'
import Step3 from './steps/step3'
import SignupPlans from './plans'
import { useDispatch } from 'react-redux'
import { signupStart } from '../../redux/actions/signup/actions'

const customDot = (dot, { status, index }) => (
    <Popover
        content={
            <span>
                Bước {index + 1}: {status}
            </span>
        }
    >
        {dot}
    </Popover>
)

const SignupContent = (props) => {
    const dispatch = useDispatch()
    const [current, setCurrent] = useState(0)
    const [completed, setCompleted] = useState(false)
    const [signupAccount, setSignupAccount] = useState([])

    const next = () => {
        setCurrent(current + 1)
    }

    const signupContent = [
        {
            title: 'Bước 1',
            content: <Step1 />
        },
        {
            title: 'Bước 2',
            content: <Step2 onOk={next} setSignupAccount={setSignupAccount} />
        },
        {
            title: 'Bước 3',
            content: <Step3 />
        }
    ]

    const items = signupContent.map((item) => ({
        key: item.title,
        title: item.title
    }))

    useEffect(() => {
        if (completed && signupAccount) {
            const firstName = signupAccount.firstName || 'Test'
            const lastName = signupAccount.lastName || 'Test'
            const email = signupAccount.email
            const password = signupAccount.password

            dispatch(signupStart(firstName, lastName, email, password))
        }
    }, [completed])

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
                            'bg-white pt-8 px-8 pb-16 m-auto max-w-[500px]'
                        }
                    >
                        <Steps
                            current={current}
                            progressDot={customDot}
                            items={items}
                        />

                        <div>{signupContent[current].content}</div>

                        <div
                            className={'flex items-center justify-center mt-8'}
                        >
                            {current < signupContent.length - 1 &&
                                current !== 1 && (
                                    <Button
                                        size={'large'}
                                        type="primary"
                                        className={'btn-large'}
                                        onClick={() => next()}
                                    >
                                        Next
                                    </Button>
                                )}
                            {current === signupContent.length - 1 && (
                                <Button
                                    size={'large'}
                                    type="primary"
                                    className={'btn-large'}
                                    onClick={() => {
                                        next()
                                        setCompleted(true)
                                    }}
                                >
                                    Done
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
