import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { EarlyStagePlan } from './pages/EarlyStagePlan';
import { EliteGrowthPlan } from './pages/EliteGrowthPlan';
import { About } from './pages/About';
import { BookCall } from './pages/BookCall';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return <React.Fragment>

    <Routes>
      <Route path='/' element={<Suspense fallback={<></>}><Home /></Suspense>} />
      <Route path='/services' element={<Suspense fallback={<></>}><Services /></Suspense>} />
      <Route path='/earlystageplan' element={<Suspense fallback={<></>}><EarlyStagePlan /></Suspense>} />
      <Route path='/elitegrowthplan' element={<Suspense fallback={<></>}><EliteGrowthPlan /></Suspense>} />
      <Route path='/about' element={<Suspense fallback={<></>}><About /></Suspense>} />
      <Route path='/bookcall' element={<Suspense fallback={<></>}><BookCall /></Suspense>} />
      <Route path='/pageNotFound' element={<Suspense fallback={<></>}><PageNotFound /></Suspense>} />
    </Routes>
  </React.Fragment>
}

export default App;
