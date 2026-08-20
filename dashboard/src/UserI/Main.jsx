import React from 'react'
import Page from './Page'

const Main = ({ canAccessDashboard, onGoToDashboard }) => {
  return (
    <header className='min-h-screen bg-slate-100 p-8 mx-6'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-bold text-slate-800'>Welcome</h1>
          <p className='text-slate-600'>This is the user home page.</p>
        </div>
      {canAccessDashboard && (
        <button
          className='mt-6 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700'
          onClick={onGoToDashboard}
        >
          Go to dashboard
        </button>
      )}
      <Page/>
    </header>
  )
}

export default Main