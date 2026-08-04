import { createHashRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import SupportPage from './pages/SupportPage'

function Layout() {
  return (
    <ThemeProvider>
      <ScrollRestoration />
      <a
        href="#main-content"
        className="pill pill-solid sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] focus:outline-none"
      >
        Skip to content
      </a>
      <Navbar />
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  )
}

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/privacy', element: <PrivacyPage /> },
      { path: '/support', element: <SupportPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
