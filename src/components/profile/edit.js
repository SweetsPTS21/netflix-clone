import React from 'react'
import { Button, Col, Form, Input, Modal, Row, Select } from 'antd'
import { profiles } from '../../resource/profile/profile'
import { EditOutlined } from '@ant-design/icons'
import { useProfileContext } from '../../context/profileContext'

const EditProfile = () => {
    const { currentProfile, isEditing, setIsEditing, setEditProfile } =
        useProfileContext()
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
                                src={currentProfile?.image}
                                alt={currentProfile?.name}
                            />
                            <div
                                className={'edit-profile'}
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                }}
                            >
                                <div className={'edit-outlined'}>
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
                                initialValue={currentProfile?.name}
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
                                initialValue={currentProfile?.name}
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

export default EditProfile
