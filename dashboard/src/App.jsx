import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Sidebar from './components/layouts/Sidebar'
import Header from './components/layouts/Header'
import DashBoard from './components/MainPage/DashBoard'
import AddSection from './components/MainPage/AddSection'
import Main from './UserI/Main'
import LoginForm from './UserI/Login'

const currentUser = {
  permissions: ['admin:dashboard'],
}
const hasAdminPermission = currentUser.permissions.includes('admin:dashboard')

// Wrapper buat halaman admin (dashboard/add) yang punya sidebar+header
const AdminLayout = ({ children, currentPage }) => {
  const [sideBarColapsed, setSideBarColapsed] = useState(false)
  const navigate = useNavigate()

  const toggleSidebar = () => setSideBarColapsed((prev) => !prev)
  const goToMain = () => navigate('/')

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 transition-all duration-500'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar
          collapsed={sideBarColapsed}
          currentPage={currentPage}
          onPageChange={(page) => navigate(`/${page}`)}
        />
        <div className='flex-1 flex flex-col overflow-hidden'>
          <Header onToglleSideBar={toggleSidebar} goToMain={goToMain} isBack={currentPage === 'dashboard'} />
          <main className='flex-1 overflow-y-auto bg-transparent'>
            <div className='p-6 space-y-6'>{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}

// Guard untuk route yang butuh permission admin
const RequireAdmin = ({ children }) => {
  if (!hasAdminPermission) return <Navigate to='/' replace />
  return children
}

const UserLogin = () => {

}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path='/login'
        element={<LoginForm/>}/>
        <Route
          path='/'
          element={<Main canAccessDashboard={hasAdminPermission} onGoToDashboard={() => navigate('/dashboard')} />}
        />
        <Route
          path='/dashboard'
          element={
            <RequireAdmin>
              <AdminLayout currentPage='dashboard'>
                <DashBoard />
              </AdminLayout>
            </RequireAdmin>
          }
        />
        <Route
          path='/add'
          element={
            <RequireAdmin>
              <AdminLayout currentPage='Add'>
                <AddSection />
              </AdminLayout>
            </RequireAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App