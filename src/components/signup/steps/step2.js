import React from 'react'
import { Button, Form, Input } from 'antd'

const Step2 = () => {
    const [form] = Form.useForm()

    const onFinish = (values) => {
        console.log('Received values of form: ', values)
    }

    const rePasswordValidator = (rule, value) => {
        if (!value || form.getFieldValue('password') === value) {
            return Promise.resolve()
        }
        return Promise.reject('Mật khẩu không khớp!')
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
                            required: true,
                            message:
                                'Vui lòng nhập email hoặc số điện thoại hợp lệ!'
                        }
                    ]}
                >
                    <Input size={'large'} placeholder={'Email'} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message:
                                'Mật khẩu của bạn phải chứa từ 4 đến 60 ký tự!'
                        }
                    ]}
                >
                    <Input.Password size={'large'} placeholder={'Mật khẩu'} />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    rules={[
                        {
                            required: true,
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
                onClick={() => {
                    form.submit()
                }}
            >
                Tiếp tục
            </Button>
        </Form>
    )
}

export default Step2
