import { Box, Heading, Text, Container, SimpleGrid, Icon, VStack } from '@chakra-ui/react'
import { FaUserGraduate, FaBook, FaBuilding } from 'react-icons/fa'

const Home = () => {
  return (
    <Container maxW="1200px" py={8} bg="white">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Bem-vindo ao Sistema de Alocação de Professores
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Gerencie professores, cursos e departamentos de forma eficiente
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg">
            <VStack spacing={4}>
              <Icon as={FaUserGraduate} w={10} h={10} color="blue.500" />
              <Heading size="md">Professores</Heading>
              <Text textAlign="center">
                Gerencie o cadastro de professores, suas qualificações e alocações
              </Text>
            </VStack>
          </Box>

          <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg">
            <VStack spacing={4}>
              <Icon as={FaBook} w={10} h={10} color="blue.500" />
              <Heading size="md">Cursos</Heading>
              <Text textAlign="center">
                Organize os cursos oferecidos e suas disciplinas
              </Text>
            </VStack>
          </Box>

          <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg">
            <VStack spacing={4}>
              <Icon as={FaBuilding} w={10} h={10} color="blue.500" />
              <Heading size="md">Departamentos</Heading>
              <Text textAlign="center">
                Administre os departamentos e suas relações com professores e cursos
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Home 