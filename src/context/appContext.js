import React, { useMemo, useState } from 'react'
import { Modal, Spin } from 'antd'

export const AppContext = React.createContext({})
export const useAppContext = () => React.useContext(AppContext)

const AppContextProvider = ({ children }) => {
    const [isRequesting, setIsRequesting] = useState(false)
    const [isEditingForm, setIsEditingForm] = useState(false)
    const [openWarning, setOpenWarning] = useState(false)
    const [agree, setAgree] = useState(false)

    const handleSetIsEditingForm = () => {
        setIsEditingForm(true)
    }

    const handleRemoveIsEditingForm = () => {
        setIsEditingForm(false)
    }

    const changeRequesting = (value) => {
        setIsRequesting(value)
    }

    const fieldsChanged = (changedFields = []) => {
        if (changedFields.length > 0) {
            setIsEditingForm(true)
        }
    }

    const handleAgree = () => {
        setAgree(true)
        setOpenWarning(false)
        handleRemoveIsEditingForm()
    }

    const getValuesContext = useMemo(() => {
        const handleOpenWarning = (onCancel) => {
            if (
                window.confirm(
                    'Bạn đang chỉnh sửa dữ liệu. Nếu thoát ra ngoài, dữ liệu sẽ bị mất. Bạn vẫn muốn thoát?'
                )
            ) {
                if (onCancel) {
                    onCancel()
                }
                handleRemoveIsEditingForm()
            }
        }

        return {
            handleRemoveIsEditingForm,
            handleSetIsEditingForm,
            isEditingForm,
            setIsEditingForm,
            fieldsChanged,
            openWarning,
            setOpenWarning,
            handleOpenWarning,
            agree,
            setAgree,
            isRequesting,
            changeRequesting
        }
    }, [isEditingForm, openWarning, agree, isRequesting])

    return (
        <AppContext.Provider value={getValuesContext}>
            {children}

            <Modal
                open={openWarning}
                onCancel={() => setOpenWarning(false)}
                onOk={handleAgree}
                destroyOnClose={true}
                title={'Cảnh báo!'}
            >
                Bạn đang chỉnh sửa dữ liệu. Nếu thoát ra ngoài, dữ liệu sẽ bị
                mất. Bạn vẫn muốn thoát?
            </Modal>
            <Spin spinning={isRequesting} fullscreen />
        </AppContext.Provider>
    )
}

export default AppContextProvider
