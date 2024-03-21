import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import CommonEN from './common/en'
import CommonVI from './common/vi'
import LayoutEN from './layout/en'
import SettingEN from './setting/en'
import LayoutVI from './layout/vi'
import SettingVI from './setting/vi'

const resources = {
    en: {
        translation: {
            ...CommonEN,
            ...LayoutEN,
            ...SettingEN
        }
    },
    vi: {
        translation: {
            ...CommonVI,
            ...LayoutVI,
            ...SettingVI
        }
    }
}

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: localStorage.getItem('language') || 'vi',
        debug: true,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    })

export default i18n
