import React from 'react'
import Page from './Page'
import LandingPage from './LandingPage'
import DividerSection from './DividerSection'
import InformPage from './InformPage'

const Main = ({ canAccessDashboard, onGoToDashboard }) => {
  return (
    <header className='min-h-screen bg-slate-100 p-8 '>
        <div className='flex flex-col items-center my-4'>
          <h1 className='text-3xl font-bold text-slate-800'>Welcome</h1>
          <p className='text-slate-600'>This is the user home page.</p>
        </div>
        <LandingPage/>
        <DividerSection/>
        <InformPage/>
        <DividerSection/>
        <Page/>
      {canAccessDashboard && (
        <button
          className='mt-4 rounded-lg bg-blue-600 px-2 py-2 font-medium text-white hover:bg-blue-700'
          onClick={onGoToDashboard}
        >
          Go to dashboard
        </button>
      )}
    </header>
  )
}

export default Main