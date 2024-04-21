import React from 'react'
import { Button, Form, Input } from 'antd'
import { emailRegex } from '../../../resource/common/common'
import PropTypes from 'prop-types'

const Step2 = ({ onOk, setSignupAccount }) => {
    const [form] = Form.useForm()

    const onFinish = (values) => {
        if (onOk) {
            setSignupAccount(values)
            onOk()
        }
    }

    const emailValidator = (rule, value) => {
        if (!value || !emailRegex.test(value)) {
            return Promise.reject(new Error('Email không hợp lệ!'))
        }
        return Promise.resolve()
    }

    const passwordValidator = (rule, value) => {
        if (!value || value.length < 4 || value.length > 60) {
            return Promise.reject(
                new Error('Mật khẩu của bạn phải chứa từ 4 đến 60 ký tự!')
            )
        }
        return Promise.resolve()
    }

    const rePasswordValidator = (rule, value) => {
        if (!value || form.getFieldValue('password') !== value) {
            return Promise.reject(new Error('Mật khẩu không khớp!'))
        }
        return Promise.resolve()
    }

    return (
        <Form
            form={form}
            onFinish={onFinish}
            className={'flex flex-col items-center text-center w-full gap-4'}
        >
            <p className={'text-2xl my-4'}>
                Tạo mật khẩu để bắt đầu tư cách thành viên của bạn
            </p>
            <p className={'text-xl'}>
                Chỉ cần vài bước nữa là bạn sẽ hoàn tất! Chúng tôi cũng chẳng
                thích thú gì với các loại giấy tờ.
            </p>
            <div className={'w-full'}>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            validator: (rule, value) =>
                                emailValidator(rule, value)
                        }
                    ]}
                >
                    <Input size={'large'} placeholder={'Email'} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            validator: (rule, value) =>
                                passwordValidator(rule, value)
                        }
                    ]}
                >
                    <Input.Password size={'large'} placeholder={'Mật khẩu'} />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    rules={[
                        {
                            validator: (rule, value) =>
                                rePasswordValidator(rule, value)
                        }
                    ]}
                >
                    <Input.Password
                        size={'large'}
                        placeholder={'Xác nhận mật khẩu'}
                    />
                </Form.Item>
            </div>

            <Button
                type="primary"
                htmlType="submit"
                className={'btn-large'}
                onClick={() => {
                    form.submit()
                }}
            >
                Tiếp tục
            </Button>
        </Form>
    )
}

Step2.propTypes = {
    onOk: PropTypes.func,
    setSignupAccount: PropTypes.func
}

export default Step2
