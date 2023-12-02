import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
