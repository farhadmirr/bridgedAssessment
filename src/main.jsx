import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'
import MainPage from './pages/mainPage.jsx'

createRoot(
  document.getElementById('root')).render(
    <Provider store={store}>
        <MainPage />
    </Provider>
  )
