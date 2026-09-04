import React from 'react'
import Page from './Page'
import LandingPage from './LandingPage'
import {DividerSection, DividerSection2} from './DividerSection'
import InformPage from './InformPage'
import GridSection from './GridSection'
import IntroductionSection from './IntroductionSection'
//import SecondDivider from './SecondDivider'

const Main = ({ canAccessDashboard, onGoToDashboard }) => {
  return (
    <header className='min-h-screen bg-slate-100  '>
        <LandingPage/>
        <DividerSection2/>
        <InformPage/>
        <DividerSection/>
        <GridSection/>
        <IntroductionSection/>
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