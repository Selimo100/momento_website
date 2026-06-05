import { createHashRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import SupportPage from './pages/SupportPage'

function Layout() {
  return (
    <>
      <ScrollRestoration />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Skip to content
      </a>
      <Navbar />
      <Outlet />
      <Footer />
    </>
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
