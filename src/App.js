import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// Pages & Components
import Home from './pages/Home'
import About from './pages/About'

// Layouts
import RootLayout from './layouts/RootLayout'

// create Browser Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
