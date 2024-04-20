import { Card, Col, Popover, Row } from 'antd'
import witcher from '../../../assets/img/witcher.jpg'
import React from 'react'
import CarouselPopover from './Popover'
import PropTypes from 'prop-types'

const CarouselRow = ({ items }) => {
    return (
        <Row gutter={16} className={'h-40 px-8 pt-6'}>
            {items?.map((item, index) => (
                <Col key={index} span={24 / items?.length}>
                    <Popover
                        content={<CarouselPopover movie={item} />}
                        arrow={false}
                        trigger={'hover'}
                        placement={'topLeft'}
                        title={item?.title}
                        mouseEnterDelay={0.5}
                        motion={true}
                    >
                        <Card
                            hoverable={true}
                            bordered={false}
                            className={'carousel-card'}
                            cover={
                                <img
                                    src={
                                        item?.images?.length > 0
                                            ? item?.images[1]
                                            : witcher
                                    }
                                    className={'w-full h-full'}
                                    alt={items?.title}
                                />
                            }
                        ></Card>
                    </Popover>
                </Col>
            ))}
        </Row>
    )
}

CarouselRow.propTypes = {
    items: PropTypes.array,
    setOpenModal: PropTypes.func
}

export default CarouselRow
