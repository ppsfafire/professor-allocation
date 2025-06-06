import { Box, Flex, Link, Heading } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={4}>
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        <Heading size="md" color="white">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
            Professor Allocation
          </Link>
        </Heading>
        <Flex gap={4}>
          <Link as={RouterLink} to="/professors" color="white" _hover={{ textDecoration: 'underline' }}>
            Professores
          </Link>
          <Link as={RouterLink} to="/courses" color="white" _hover={{ textDecoration: 'underline' }}>
            Cursos
          </Link>
          <Link as={RouterLink} to="/departments" color="white" _hover={{ textDecoration: 'underline' }}>
            Departamentos
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 