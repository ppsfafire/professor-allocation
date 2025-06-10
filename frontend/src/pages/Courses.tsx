import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
  Container,
} from '@chakra-ui/react'
import api from '../services/api'

interface Course {
  id: number
  name: string
  description: string
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const [formData, setFormData] = useState<Omit<Course, 'id'>>({
    name: '',
    description: '',
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const fetchCourses = async () => {
    try {
      const response = await api.get('/courses')
      setCourses(response.data)
    } catch (error) {
      toast({
        title: 'Erro ao carregar cursos',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.post('/courses', formData)
      toast({
        title: 'Curso cadastrado com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      onClose()
      fetchCourses()
      setFormData({ name: '', description: '' })
    } catch (error) {
      toast({
        title: 'Erro ao cadastrar curso',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/courses/${id}`)
      toast({
        title: 'Curso removido com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      fetchCourses()
    } catch (error) {
      toast({
        title: 'Erro ao remover curso',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <Container maxW="1200px" px={4} py={8} bg="white">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Heading size="lg">Cursos</Heading>
        <Button colorScheme="blue" onClick={onOpen}>
          Novo Curso
        </Button>
      </Box>

      <Table variant="simple" w="full">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Descrição</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {courses.map((course) => (
            <Tr key={course.id}>
              <Td>{course.name}</Td>
              <Td>{course.description}</Td>
              <Td>
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={() => handleDelete(course.id)}
                >
                  Remover
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Novo Curso</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Descrição</FormLabel>
                  <Input
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </FormControl>
                <Button type="submit" colorScheme="blue" width="full">
                  Salvar
                </Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  )
}

export default Courses 