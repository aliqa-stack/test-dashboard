import React from 'react'
import { useState } from 'react'
import Sidebar from './components/layouts/Sidebar'
import Header from './components/layouts/Header'
import DashBoard from './components/MainPage/DashBoard'
import AddSection from './components/MainPage/AddSection'
import Main from './UserI/Main'

const App = () => {
  // Replace s with the authenticated user returned by backend.
  const currentUser = {
    permissions: ['admin:dashboard'],
  };
  const hasAdminPermission = currentUser.permissions.includes('admin:dashboard');
  const [sideBarColapsed, setSideBarColapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleSidebar = () => {
    setSideBarColapsed((prev) => !prev);
  };

  const handlePageChange = (page) => {
    if (page === 'dashboard' && !hasAdminPermission) {
      return;
    }

    setCurrentPage(page);
  };

  const goToMain = () => handlePageChange('home');


  if (currentPage === 'home') {
    return (
      <Main
        canAccessDashboard={hasAdminPermission}
        onGoToDashboard={() => handlePageChange('dashboard')}
      />
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 transition-all  duration-500'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar collapsed={sideBarColapsed} currentPage={currentPage} onPageChange={handlePageChange} />
        <div className='flex-1 flex flex-col overflow-hidden'>
          <Header
            onToglleSideBar={toggleSidebar}
            goToMain={goToMain}
            isBack={currentPage === 'dashboard'}
          />
        
          
          <main className='flex-1 overflow-y-auto bg-transparent'>
            <div className='p-6 space-y-6'>
              {currentPage === "dashboard" && <DashBoard />}
              {currentPage === "Add" && <AddSection />}

            </div>
          </main>
        </div>
      </div>

    </div>
  )
}

export default App