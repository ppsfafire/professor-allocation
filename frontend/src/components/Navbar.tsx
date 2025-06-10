import { Box, Flex, Link, Heading } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import CustomContainer from './CustomContainer'

const Navbar = () => {
  return (
    <Box bg="blue.500" py={4}>
      <CustomContainer>
        <Flex justify="space-between" align="center">
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
      </CustomContainer>
    </Box>
  )
}

export default Navbar 