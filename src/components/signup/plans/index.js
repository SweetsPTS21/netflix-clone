import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'antd'
import { plans } from '../../../resource/signup/signup'
import CardTitle from './CardTitle'
import CardDescription from './CardDes'
import { useNavigate } from 'react-router-dom'

const SignupPlans = () => {
    const navigate = useNavigate()
    const [selectedPlan, setSelectedPlan] = useState(plans[0].id)

    return (
        <div className={'w-[70%] max-w-[80rem] p-12'}>
            <p className={'text-4xl text-center mb-12'}>
                Chọn gói dịch vụ của bạn
            </p>
            <Row gutter={16} className={'my-6'}>
                {plans?.map((plan) => (
                    <Col span={6} key={plan.id}>
                        <Card
                            title={
                                <CardTitle
                                    title={plan.title}
                                    isSelected={selectedPlan === plan.id}
                                />
                            }
                            bordered={true}
                            hoverable={true}
                            className={'relative'}
                            onClick={() => {
                                setSelectedPlan(plan.id)
                            }}
                            style={
                                selectedPlan === plan.id
                                    ? {
                                          border: '2px solid #e50914'
                                      }
                                    : null
                            }
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
            <Button
                type={'primary'}
                size={'large'}
                className={'mt-8'}
                onClick={() => {
                    navigate('/profile')
                }}
            >
                Tiếp theo
            </Button>
        </div>
    )
}

export default SignupPlans
