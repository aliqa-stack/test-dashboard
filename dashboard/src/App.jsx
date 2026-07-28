import React from 'react'
import { useState } from 'react'
import Sidebar from './components/layouts/Sidebar'
import Header from './components/layouts/Header'
import DashBoard from './components/MainPage/DashBoard'

const App = () => {
  const [sideBarColapsed, setSideBarColapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  const toggleSidebar = () => {
    setSideBarColapsed((prev) => !prev);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 transition-all  duration-500'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar collapsed={sideBarColapsed} currentPage={currentPage} onPageChange={setCurrentPage} />
        <div className='flex-1 flex flex-col overflow-hidden'>
          <Header onToglleSideBar={toggleSidebar} />
          
          <main className='flex-1 overflow-y-auto bg-transparent'>
            <div className='p-6 space-y-6'>
              {currentPage == "dashboard" && <DashBoard/>}

            </div>
          </main>
        </div>
      </div>

    </div>
  )
}

export default App