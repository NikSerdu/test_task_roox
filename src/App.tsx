import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import User from './pages/User/User'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='user/:userId' element={<User />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
