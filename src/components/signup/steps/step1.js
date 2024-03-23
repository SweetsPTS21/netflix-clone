import React from 'react'
import devices from '../../../asset/icon/devices.png'

const Step1 = () => {
    return (
        <div className={'flex flex-col items-center text-center gap-4'}>
            <img src={devices} alt="devices" className={'my-4'} />
            <p className={'text-3xl'}>
                Hoàn thành việc cài đặt tài khoản của bạn
            </p>
            <p className={'text-xl'}>
                Netflix được cá nhân hóa cho riêng bạn. Tạo mật khẩu để xem
                Netflix trên bất kỳ thiết bị nào, vào bất cứ lúc nào.
            </p>
        </div>
    )
}

export default Step1
