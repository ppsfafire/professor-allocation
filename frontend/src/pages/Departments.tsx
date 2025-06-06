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
} from '@chakra-ui/react'
import api from '../services/api'

interface Department {
  id: number
  name: string
  description: string
}

const Departments = () => {
  const [departments, setDepartments] = useState<Department[]>([])
  const [formData, setFormData] = useState<Omit<Department, 'id'>>({
    name: '',
    description: '',
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const fetchDepartments = async () => {
    try {
      const response = await api.get('/departments')
      setDepartments(response.data)
    } catch (error) {
      toast({
        title: 'Erro ao carregar departamentos',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    fetchDepartments()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.post('/departments', formData)
      toast({
        title: 'Departamento cadastrado com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      onClose()
      fetchDepartments()
      setFormData({ name: '', description: '' })
    } catch (error) {
      toast({
        title: 'Erro ao cadastrar departamento',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/departments/${id}`)
      toast({
        title: 'Departamento removido com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      fetchDepartments()
    } catch (error: any) {
      const msg = error?.response?.data || 'Erro ao remover departamento';
      toast({
        title: msg,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  return (
    <Box p={4}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Heading size="lg">Departamentos</Heading>
        <Button colorScheme="blue" onClick={onOpen}>
          Novo Departamento
        </Button>
      </Box>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Descrição</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {departments.map((department) => (
            <Tr key={department.id}>
              <Td>{department.name}</Td>
              <Td>{department.description}</Td>
              <Td>
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={() => handleDelete(department.id)}
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
          <ModalHeader>Novo Departamento</ModalHeader>
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
    </Box>
  )
}

export default Departments 