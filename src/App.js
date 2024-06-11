import React from 'react';
import { Route, Routes } from "react-router-dom";
import Loader from './components/loader';
const LandingPage = React.lazy(() => import('./landing'))
const BlogPage = React.lazy(() => import('./blog'))
const PrivacyPage = React.lazy(() => import('./privacy'))

const App = () => {
  return (
    <React.Suspense fallback={<Loader/>}>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}></Route>
        <Route exact path='/blog' element={<BlogPage/>}></Route>
        <Route exact path='/privacy' element={<PrivacyPage/>}></Route>
      </Routes>
    </React.Suspense>
  )
}

export default App;