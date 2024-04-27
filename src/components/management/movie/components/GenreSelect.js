import { Form, Select } from 'antd'
import React from 'react'

const { Option } = Select

export const GenreSelect = ({ value }) => {
    return (
        <Form.Item
            label="Genre"
            name="genre"
            rules={[
                {
                    required: true,
                    message: 'Genre is required'
                }
            ]}
        >
            <Select mode="multiple" placeholder="Genre" value={value}>
                <Option value="action">Action</Option>
                <Option value="comedy">Comedy</Option>
                <Option value="drama">Drama</Option>
                <Option value="sci-fi">Sci-Fi</Option>
                <Option value="horror">Horror</Option>
                <Option value="romance">Romance</Option>
                <Option value="thriller">Thriller</Option>
                <Option value="fantasy">Fantasy</Option>
                <Option value="animation">Animation</Option>
                <Option value="family">Family</Option>
                <Option value="mystery">Mystery</Option>
                <Option value="crime">Crime</Option>
                <Option value="adventure">Adventure</Option>
                <Option value="documentary">Documentary</Option>
                <Option value="music">Music</Option>
                <Option value="biography">Biography</Option>
                <Option value="history">History</Option>
                <Option value="war">War</Option>
            </Select>
        </Form.Item>
    )
}
