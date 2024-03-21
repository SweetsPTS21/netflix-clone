import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { I18nextProvider } from 'react-i18next'
import i18n from './translation/i18n'
import DocumentMeta from 'react-document-meta'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { ConfigProvider } from 'antd'
import vi_VN from 'antd/es/locale/vi_VN'
import en_US from 'antd/es/locale/en_US'
import { ApolloProvider } from '@apollo/client'
import { client } from './custom/graphql'

const root = ReactDOM.createRoot(document.getElementById('root'))

const meta = {
    title: 'Netflix Clone',
    description:
        'Xem phim, series, show truyền hình và nhiều hơn nữa. Hãy tham gia ngay hôm nay.',
    canonical: 'https://netflix-clone-1b3e7.web.app/',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }
}

root.render(
    <I18nextProvider i18n={i18n}>
        <DocumentMeta {...meta}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ConfigProvider
                        locale={
                            localStorage.getItem('language') === 'en'
                                ? en_US
                                : vi_VN
                        }
                    >
                        <ApolloProvider client={client}>
                            <App />
                        </ApolloProvider>
                    </ConfigProvider>
                </PersistGate>
            </Provider>
        </DocumentMeta>
    </I18nextProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
