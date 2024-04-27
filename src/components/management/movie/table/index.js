import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { useMovieContext } from '../../../../context/management/movieContext'
import { mapper } from './mapper'
import { Columns } from './columns'

const MovieTable = () => {
    const { allMovies, loadingMovie, changeEditModalState } = useMovieContext()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10
        }
    })

    console.log('allMovies', allMovies)

    const fetchData = () => {
        setLoading(true)
        const delayFr = setTimeout(() => {
            setData(mapper(allMovies))
            setLoading(false)
        }, 500)

        return () => clearTimeout(delayFr)
    }

    useEffect(() => {
        fetchData()
    }, [
        tableParams.pagination?.current,
        tableParams.pagination?.pageSize,
        allMovies
    ])

    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            ...sorter
        })
        // `dataSource` is useless since `pageSize` changed
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setData([])
        }
    }

    return (
        <Table
            columns={Columns(
                tableParams,
                handleTableChange,
                setData,
                changeEditModalState
            )}
            dataSource={data}
            pagination={tableParams.pagination}
            loading={loadingMovie || loading}
            onChange={handleTableChange}
            scroll={{
                y: 600
            }}
        />
    )
}

export default MovieTable
