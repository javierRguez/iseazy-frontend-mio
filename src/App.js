import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import { ROUTE_DASHBOARD } from './routes/routes'
import { ThemeProvider } from './contexts/ThemeContext'

import AppContainer from './components/app-container/AppContainer';

const Home = lazy(() => import('./pages/home/Home'))
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))

const App=()=> {

  return (
    <ThemeProvider>
      <BrowserRouter>
      <AppContainer>
      
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<>...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path={ROUTE_DASHBOARD}
            element={
              <Suspense fallback={<>...</>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<>...</>}>
                <Home />
              </Suspense>
            }
          />
        </Routes>
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
