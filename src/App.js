import AppContextProvider from './context/app'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootPage from './RootPage'
import { BASE_HOME } from './custom/axios/config/Url'
import Error403 from './common/error/Error403'
import './App.scss'
import SettingRouter from './components/setting/Router'
import LoginPage from './components/login'
import Signup from './components/signup'
import SignupPage from './components/signup'

function App() {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<RootPage />}>
                        <Route path="setting/*" element={<SettingRouter />} />
                        <Route path="forbidden" element={<Error403 />} />
                    </Route>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="403" element={<Error403 href={BASE_HOME} />} />
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    )
}

export default App
