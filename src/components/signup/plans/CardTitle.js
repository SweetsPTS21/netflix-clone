import { CheckCircleOutlined } from '@ant-design/icons'
import React from 'react'

const CardTitle = ({ title, isSelected }) => {
    return (
        <div className={'card-title'}>
            {isSelected && (
                <>
                    <div className={'card-selected'}></div>
                    <CheckCircleOutlined
                        style={{
                            position: 'absolute',
                            top: '5px',
                            right: '5px',
                            fontSize: '20px'
                        }}
                    />
                </>
            )}
            <p>{title}</p>
        </div>
    )
}

export default CardTitle
