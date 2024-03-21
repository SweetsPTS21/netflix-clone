import AppContextProvider from './context/app'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootPage from './RootPage'
import { BASE_HOME } from './custom/axios/config/Url'
import Error403 from './common/error/Error403'
import './App.css'
import SettingRouter from './components/setting/Router'

function App() {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<RootPage />}>
                        <Route path="setting/*" element={<SettingRouter />} />
                        <Route path="forbidden" element={<Error403 />} />
                    </Route>
                    <Route path="403" element={<Error403 href={BASE_HOME} />} />
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    )
}

export default App
