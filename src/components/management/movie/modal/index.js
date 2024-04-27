import React, { useEffect, useState } from 'react'
import {
    Button,
    Col,
    DatePicker,
    Flex,
    Form,
    Input,
    Modal,
    Row,
    Select,
    Spin,
    Tooltip,
    Typography,
    Upload
} from 'antd'
import { useMovieContext } from '../../../../context/management/movieContext'
import dayjs from 'dayjs'
import { UPDATE_MOVIE } from '../../../../api/graphql/movie'
import { useMutation } from '@apollo/client'
import { GenreSelect } from '../components/GenreSelect'
import { message } from 'antd'
import _ from 'lodash'

const UpdateMovieModal = () => {
    const { openEditModal, changeEditModalState, currentMovie, refetchMovies } =
        useMovieContext()
    const [form] = Form.useForm()
    const [released, setReleased] = useState(dayjs())

    const [updateMove, { loading, error }] = useMutation(UPDATE_MOVIE)

    const delayFn = _.debounce((values) => {
        updateMove({
            variables: {
                movieId: currentMovie?.id,
                movie: {
                    title: values.title,
                    genre: values.genre,
                    rated: values.rated,
                    year: dayjs(released).format('YYYY'),
                    released: dayjs(released).format('YYYY-MM-DD'),
                    runtime: values.runtime,
                    director: values.director,
                    writer: values.writer,
                    actors: values.actors,
                    plot: values.plot,
                    languages: values.languages,
                    country: values.country,
                    awards: values.awards,
                    poster: currentMovie?.poster,
                    metascore: Number(values.metascore),
                    imdbRating: values.imdbRating,
                    imdbVotes: values.imdbVotes,
                    type: values.type,
                    trailer: values.trailer,
                    response: true,
                    images: currentMovie?.images
                }
            }
        })
            .then((r) => {
                console.log('r', r)
                changeEditModalState({})
                message.success('Movie updated successfully').then((r) => r)
            })
            .finally(() => refetchMovies())
    }, 500)

    const onFinish = (values) => {
        console.log('form', values)

        if (!values) return

        delayFn(values)
    }

    useEffect(() => {
        if (!currentMovie) return

        setReleased(dayjs(currentMovie?.released))
        form.setFieldsValue(currentMovie)
    }, [currentMovie])

    return (
        <Modal
            title="Update Movie"
            open={openEditModal}
            onOk={() => changeEditModalState({})}
            onCancel={() => changeEditModalState({})}
            width={1300}
            footer={null}
        >
            <Form
                form={form}
                layout="vertical"
                initialValues={currentMovie}
                onFinish={onFinish}
            >
                <Row gutter={16}>
                    <Col span={6}>
                        <Flex vertical>
                            <Upload
                                listType="picture-card"
                                showUploadList={false}
                            >
                                <div>Upload</div>
                            </Upload>
                            <Typography.Text>Upload Poster</Typography.Text>
                        </Flex>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[
                                { required: true, message: 'Title is required' }
                            ]}
                        >
                            <Input
                                placeholder="Title"
                                value={currentMovie.title}
                            />
                        </Form.Item>

                        <GenreSelect value={currentMovie?.genre} />

                        <Form.Item
                            label="Rated"
                            name="rated"
                            rules={[
                                {
                                    required: true,
                                    message: 'Rated is required'
                                }
                            ]}
                        >
                            <Select
                                placeholder="Rated"
                                value={currentMovie.rated}
                            >
                                <Select.Option value="G">G</Select.Option>
                                <Select.Option value="PG">PG</Select.Option>
                                <Select.Option value="PG-13">
                                    PG-13
                                </Select.Option>
                                <Select.Option value="R">R</Select.Option>
                                <Select.Option value="NC-17">
                                    NC-17
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Released"
                            name="released"
                            rules={[
                                {
                                    required: true,
                                    message: 'Released is required'
                                }
                            ]}
                            valuePropName={'date'}
                        >
                            <DatePicker
                                placeholder="Released"
                                value={released}
                                onChange={(date) => setReleased(date)}
                                format={'YYYY-MM-DD'}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Languages"
                            name="languages"
                            rules={[
                                {
                                    required: true,
                                    message: 'Language is required'
                                }
                            ]}
                        >
                            <Input
                                placeholder="Language"
                                value={currentMovie.language}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Plot"
                            name="plot"
                            rules={[
                                {
                                    required: true,
                                    message: 'Plot is required'
                                }
                            ]}
                        >
                            <Input.TextArea
                                placeholder="Plot"
                                value={currentMovie.plot}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Runtime"
                            name="runtime"
                            rules={[
                                {
                                    required: true,
                                    message: 'Runtime is required'
                                }
                            ]}
                        >
                            <Input
                                placeholder="Runtime"
                                value={currentMovie.runtime}
                                suffix={
                                    <Tooltip title="Length of movie (minutes)">
                                        <span>min</span>
                                    </Tooltip>
                                }
                            />
                        </Form.Item>
                        <Form.Item
                            label="Director"
                            name="director"
                            rules={[
                                {
                                    required: true,
                                    message: 'Director is required'
                                }
                            ]}
                        >
                            <Input
                                placeholder="Director"
                                value={currentMovie.director}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Writer"
                            name="writer"
                            rules={[
                                {
                                    required: true,
                                    message: 'Writer is required'
                                }
                            ]}
                        >
                            <Input
                                placeholder="Writer"
                                value={currentMovie.writer}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Actors"
                            name="actors"
                            rules={[
                                {
                                    required: true,
                                    message: 'Actors is required'
                                }
                            ]}
                        >
                            <Input
                                placeholder="Actors"
                                value={currentMovie.actors}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Country"
                            name="country"
                            rules={[
                                {
                                    required: true,
                                    message: 'Production is required'
                                }
                            ]}
                        >
                            <Input
                                placeholder="Country"
                                value={currentMovie.country}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Awards"
                            name="awards"
                            rules={[
                                {
                                    required: true,
                                    message: 'Awards is required'
                                }
                            ]}
                        >
                            <Input
                                placeholder="Awards"
                                value={currentMovie.awards}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Metascore" name="metascore">
                            <Input
                                placeholder="Metascore"
                                value={currentMovie.metascore}
                                suffix={
                                    <Tooltip title="Metascore rating">
                                        <span>score</span>
                                    </Tooltip>
                                }
                            />
                        </Form.Item>
                        <Form.Item label="Imdb Rating" name="imdbRating">
                            <Input
                                placeholder="Imdb Rating"
                                value={currentMovie.imdbRating}
                                suffix={
                                    <Tooltip title="Imdb rating">
                                        <span>rating</span>
                                    </Tooltip>
                                }
                            />
                        </Form.Item>
                        <Form.Item label="Imdb Votes" name="imdbVotes">
                            <Input
                                placeholder="Imdb Votes"
                                value={currentMovie.imdbVotes}
                                suffix={
                                    <Tooltip title="Imdb votes">
                                        <span>votes</span>
                                    </Tooltip>
                                }
                            />
                        </Form.Item>
                        <Form.Item
                            label="Type"
                            name="type"
                            rules={[
                                {
                                    required: true,
                                    message: 'Type is required'
                                }
                            ]}
                        >
                            <Input
                                placeholder="Type"
                                value={currentMovie.type}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Trailer"
                            name="trailer"
                            rules={[
                                {
                                    required: true,
                                    message: 'Trailer is required'
                                }
                            ]}
                        >
                            <Input
                                placeholder="Trailer"
                                value={currentMovie.trailer}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Flex justify={'end'}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={() => form.submit()}
                        loading={loading}
                    >
                        Update
                    </Button>
                </Flex>
            </Form>
            {loading && <Spin spinning={loading} />}
        </Modal>
    )
}

export default UpdateMovieModal
