import React, { useState } from 'react'
import { Button, Col, Form, Input, Modal, Row, Select } from 'antd'
import { profiles } from '../../resource/profile/profile'
import PropTypes from 'prop-types'
import { EditOutlined } from '@ant-design/icons'

const EditProfile = ({ profile, isEditing, setIsEditing, setEditProfile }) => {
    const [isSelectingAvatar, setIsSelectingAvatar] = useState(false)

    return (
        <Modal
            title={<p className={'text-2xl ml-4'}>Chỉnh sửa hồ sơ</p>}
            footer={null}
            onOk={() => setIsEditing(false)}
            onCancel={() => setIsEditing(false)}
            open={isEditing}
        >
            <Form
                layout={'vertical'}
                className={
                    'w-[30rem] h-[30rem] bg-[#1f1f1f] p-4 flex flex-col justify-between'
                }
            >
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <div className={'relative'}>
                            <img
                                className={'h-full w-full'}
                                src={profile?.image}
                                alt={profile?.name}
                            />
                            <div
                                className={'edit-profile'}
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                }}
                            >
                                <div
                                    className={'edit-outlined'}
                                    onClick={() => {
                                        setIsSelectingAvatar(true)
                                    }}
                                >
                                    <EditOutlined />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className={'flex flex-col text-2xl w-full'}>
                            <Form.Item
                                label={'Tên'}
                                name={'name'}
                                initialValue={profile?.name}
                            >
                                <Input
                                    size={'large'}
                                    className={
                                        'w-full h-10 px-2 text-white input-outlined-dark'
                                    }
                                />
                            </Form.Item>
                            <Form.Item
                                label={'Ngôn ngữ'}
                                name={'language'}
                                initialValue={profile?.name}
                            >
                                <Select size={'large'}>
                                    {profiles.map((profile) => (
                                        <Select.Option
                                            key={profile.id}
                                            value={profile.id}
                                        >
                                            {profile.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label={'Giới hạn xem'}
                                name={'limit'}
                                initialValue={0}
                            >
                                <Select size={'large'}>
                                    <Select.Option value={0}>
                                        Tất cả mọi người
                                    </Select.Option>
                                    <Select.Option value={1}>
                                        Trẻ em
                                    </Select.Option>
                                    <Select.Option value={2}>
                                        Người lớn
                                    </Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </Col>
                </Row>
                <div className={'flex items-center'}>
                    <Button
                        className={
                            'px-12 py-2 mt-8 h-max btn-secondary-light bg-white text-black'
                        }
                        size={'large'}
                        onClick={() => {
                            setIsEditing(false)
                            setEditProfile(false)
                        }}
                    >
                        <p className={'text-2xl'}>Lưu</p>
                    </Button>
                    <Button
                        className={
                            'px-12 py-2 mt-8 h-max btn-secondary-dark ml-4'
                        }
                        size={'large'}
                        onClick={() => {
                            setIsEditing(false)
                            setEditProfile(false)
                        }}
                    >
                        <p className={'text-2xl'}>Hủy</p>
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}

EditProfile.propTypes = {
    profile: PropTypes.object,
    isEditing: PropTypes.bool,
    setIsEditing: PropTypes.func,
    setEditProfile: PropTypes.func
}

EditProfile.defaultProps = {
    profile: {},
    isEditing: false
}

export default EditProfile
