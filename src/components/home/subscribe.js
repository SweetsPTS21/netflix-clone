import React from 'react'
import { Button, Form, Input } from 'antd'
import { RightOutlined } from '@ant-design/icons'

const HomeSubscribe = () => {
    const [form] = Form.useForm()

    const onFinish = (values) => {
        console.log(values)
    }

    return (
        <Form
            form={form}
            onFinish={onFinish}
            className={'flex flex-col items-center'}
        >
            <p className={'text-lg text-white text-center'}>
                Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại
                tư cách thành viên của bạn.
            </p>
            <div
                className={'flex gap-4 w-full relative text-left'}
                style={{
                    maxWidth: '36.625rem',
                    margin: '1rem auto 0 auto'
                }}
            >
                <Form.Item
                    name={'email'}
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập email hợp lệ.'
                        }
                    ]}
                    className={'w-full m-0'}
                >
                    <Input
                        type={'text'}
                        placeholder={'Địa chỉ email'}
                        className={
                            'h-[50px] px-4 text-white input-outlined-dark'
                        }
                    />
                </Form.Item>
                <Button
                    type={'primary'}
                    className={'flex items-center px-4 text-2xl h-[50px]'}
                    onClick={() => {
                        form.submit()
                    }}
                >
                    {'Bắt đầu'}
                    <RightOutlined className={'text-lg font-bold'} />
                </Button>
            </div>
        </Form>
    )
}

export default HomeSubscribe
