import React, { useEffect } from 'react'
import { Button, Col, Form, Input, Modal, Row, Select } from 'antd'
import { profiles } from '../../resource/profile/profile'
import { EditOutlined } from '@ant-design/icons'
import { useProfileContext } from '../../context/profileContext'
import defaultProfile from '../../assets/img/200.png'
import {
    CREATE_USER_PROFILE,
    UPDATE_USER_PROFILE
} from '../../api/graphql/profile'
import { useMutation } from '@apollo/client'
import { useAuthedContext } from '../../context/authedContext'
import { useAppContext } from '../../context/appContext'

const EditProfile = () => {
    const [form] = Form.useForm()
    const {
        currProfile,
        isEditing,
        setIsEditing,
        setEditProfile,
        formMode,
        refetchProfile
    } = useProfileContext()
    const { authedUser } = useAuthedContext()
    const { changeRequesting } = useAppContext()

    const [createProfile] = useMutation(CREATE_USER_PROFILE)
    const [updateProfile] = useMutation(UPDATE_USER_PROFILE)

    const onFinish = (values) => {
        changeRequesting(true)
        if (formMode === 'add') {
            createProfile({
                variables: {
                    userId: authedUser?.id,
                    name: values.name,
                    avatar: '',
                    status: 'active',
                    type: 'DEFAULT',
                    password: '',
                    description: ''
                }
            }).then((r) => {
                setIsEditing(false)
                changeRequesting(false)
                refetchProfile()
            })
        } else if (formMode === 'update') {
            updateProfile({
                variables: {
                    id: currProfile?.id,
                    userId: authedUser?.id,
                    name: values.name,
                    avatar: '',
                    status: 'active',
                    type: 'DEFAULT',
                    password: '',
                    description: values.description
                }
            }).then((r) => {
                setIsEditing(false)
                changeRequesting(false)
                refetchProfile()
            })
        }
    }

    const onCancel = () => {
        setIsEditing(false)
        setEditProfile(false)
    }

    useEffect(() => {
        if (formMode === 'add') {
            form.resetFields()
        } else if (formMode === 'update') {
            form.setFieldsValue({
                name: currProfile?.name,
                limit: currProfile?.limit,
                description: currProfile?.description
            })
        }
    }, [formMode, currProfile])

    return (
        <Modal
            title={
                <p className={'text-2xl ml-4'}>
                    {formMode === 'add' ? 'Thêm mới hồ sơ' : 'Chỉnh sửa hồ sơ'}
                </p>
            }
            footer={null}
            onOk={() => setIsEditing(false)}
            onCancel={() => setIsEditing(false)}
            open={isEditing}
        >
            <Form
                form={form}
                layout={'vertical'}
                className={
                    'w-[30rem] h-[30rem] bg-[#1f1f1f] p-4 flex flex-col justify-between'
                }
                onFinish={onFinish}
            >
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <div className={'relative'}>
                            <img
                                className={'h-full w-full'}
                                src={currProfile?.image || defaultProfile}
                                alt={currProfile?.name}
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
                                initialValue={currProfile?.name}
                            >
                                <Input
                                    size={'large'}
                                    className={
                                        'w-full h-10 px-2 text-white input-outlined-dark'
                                    }
                                />
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
                            <Form.Item label={'Mô tả'} name={'description'}>
                                <Input.TextArea
                                    size={'large'}
                                    className={
                                        'w-full h-20 px-2 text-white input-outlined-dark'
                                    }
                                />
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
                        onClick={() => form.submit()}
                    >
                        <p className={'text-2xl'}>Lưu</p>
                    </Button>
                    <Button
                        className={
                            'px-12 py-2 mt-8 h-max btn-secondary-dark ml-4'
                        }
                        size={'large'}
                        onClick={onCancel}
                    >
                        <p className={'text-2xl'}>Hủy</p>
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}

export default EditProfile
