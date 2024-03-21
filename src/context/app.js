import React, { useMemo, useState } from 'react'
import { Modal } from 'antd'

export const AppContext = React.createContext({})

const AppContextProvider = ({ children }) => {
    const [isEditingForm, setIsEditingForm] = useState(false)
    const [openWarning, setOpenWarning] = useState(false)
    const [agree, setAgree] = useState(false)

    const handleSetIsEditingForm = () => {
        setIsEditingForm(true)
    }

    const handleRemoveIsEditingForm = () => {
        setIsEditingForm(false)
    }

    const fieldsChanged = (changedFields = []) => {
        if (changedFields.length > 0) {
            setIsEditingForm(true)
        }
    }

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

    const handleAgree = () => {
        setAgree(true)
        setOpenWarning(false)
        handleRemoveIsEditingForm()
    }

    const getValuesContext = useMemo(() => {
        return {
            handleRemoveIsEditingForm,
            handleSetIsEditingForm,
            isEditingForm,
            setIsEditingForm,
            fieldsChanged,
            openWarning,
            setOpenWarning,
            handleOpenWarning,
            handleAgree,
            agree,
            setAgree
        }
    }, [isEditingForm, openWarning, agree])

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
        </AppContext.Provider>
    )
}

export default AppContextProvider
