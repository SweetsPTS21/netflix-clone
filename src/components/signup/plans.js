import React from 'react'
import { Button, Card, Col, Divider, Row } from 'antd'
import { plans } from '../../resource/signup/signup'

const SignupPlans = () => {
    const CardTitle = ({ title }) => {
        return (
            <div className={'card-title'}>
                <p>{title}</p>
            </div>
        )
    }

    const CardDescription = ({ description }) => {
        return description?.map((item) => (
            <>
                <div key={item.title}>
                    <p className={'text-sm text-gray-500'}>{item.title}</p>
                    <p className={'text-lg'}>{item.content}</p>
                </div>
                <Divider />
            </>
        ))
    }

    return (
        <div className={'w-[70%] p-12'}>
            <p className={'text-4xl text-center mb-12'}>
                Chọn gói dịch vụ của bạn
            </p>
            <Row gutter={16} className={'my-6'}>
                {plans?.map((plan) => (
                    <Col span={6} key={plan.id}>
                        <Card
                            title={<CardTitle title={plan.title} />}
                            bordered={true}
                            hoverable={true}
                        >
                            <CardDescription description={plan.description} />
                        </Card>
                    </Col>
                ))}
            </Row>
            <p className={'text-[13px] text-[#737373] my-2'}>
                Việc bạn có thể xem ở chế độ HD (720p), Full HD (1080p), Ultra
                HD (4K) và HDR hay không phụ thuộc vào dịch vụ internet và khả
                năng của thiết bị. Không phải tất cả nội dung đều có sẵn ở mọi
                độ phân giải. Xem Điều khoản sử dụng của chúng tôi để biết thêm
                chi tiết.
            </p>
            <p className={'text-[13px] text-[#737373] my-2'}>
                Chỉ những người sống cùng bạn mới có thể dùng tài khoản của bạn.
                Xem trên 4 thiết bị khác nhau cùng lúc với gói Cao cấp, 2 với
                gói Tiêu chuẩn và 1 với gói Cơ bản và Di động.
            </p>
            <Button type={'primary'} size={'large'} className={'mt-8'}>
                Tiếp theo
            </Button>
        </div>
    )
}

export default SignupPlans
