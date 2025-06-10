import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Professors from './pages/Professors'
import Courses from './pages/Courses'
import Departments from './pages/Departments'

function App() {
  return (
    <Box minH="100vh">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professors" element={<Professors />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/departments" element={<Departments />} />
      </Routes>
    </Box>
  )
}

export default App
