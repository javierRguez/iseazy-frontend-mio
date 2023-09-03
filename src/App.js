import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTE_DASHBOARD } from './routes/routes'
import { ThemeProvider } from './contexts/ThemeContext'

const Home = lazy(() => import('./pages/home/Home'))
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
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
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
