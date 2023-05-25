import '@assets/tailwind.css'
import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './i18n'
import { ModeProvider } from '@components/ModeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<ConfigProvider
		theme={{
			token: {
				colorPrimary: '#00b96b',
			},
		}}
		form={{
			validateMessages: {
				required: '"${label}" là bắt buộc',
				types: {
					email: '${label}',
				},
			},
		}}
	>
		<BrowserRouter>
			<ModeProvider>
				<App />
			</ModeProvider>
		</BrowserRouter>
	</ConfigProvider>,
	// </React.StrictMode>,
)
