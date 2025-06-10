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
  Select,
} from '@chakra-ui/react'
import api from '../services/api'
import CustomContainer from '../components/CustomContainer'

interface Professor {
  id: number
  name: string
  email: string
  department: any
}

interface Departamento {
  id: number
  name: string
  description: string
}

const Professors = () => {
  const [professors, setProfessors] = useState<Professor[]>([])
  const [departments, setDepartments] = useState<Departamento[]>([])
  const [formData, setFormData] = useState<Omit<Professor, 'id'>>({
    name: '',
    email: '',
    department: '',
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const fetchProfessors = async () => {
    try {
      const response = await api.get('/professors')
      setProfessors(response.data)
    } catch (error) {
      toast({
        title: 'Erro ao carregar professores',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

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
    fetchProfessors()
    fetchDepartments()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.post('/professors', {
        name: formData.name,
        email: formData.email,
        department: { id: Number(formData.department) },
      })
      toast({
        title: 'Professor cadastrado com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      onClose()
      fetchProfessors()
      setFormData({ name: '', email: '', department: '' })
    } catch (error) {
      toast({
        title: 'Erro ao cadastrar professor',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/professors/${id}`)
      toast({
        title: 'Professor removido com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      fetchProfessors()
    } catch (error) {
      toast({
        title: 'Erro ao remover professor',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <CustomContainer py={8} bg="white">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Heading size="lg">Professores</Heading>
        <Button colorScheme="blue" onClick={onOpen} isDisabled={departments.length === 0}>
          Novo Professor
        </Button>
      </Box>
      {departments.length === 0 && (
        <Box color="red.500" mt={2}>
          Cadastre um departamento antes de adicionar professores.
        </Box>
      )}

      <Table variant="simple" w="full">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>Departamento</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {professors.map((professor) => (
            <Tr key={professor.id}>
              <Td>{professor.name}</Td>
              <Td>{professor.email}</Td>
              <Td>{professor.department.name}</Td>
              <Td>
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={() => handleDelete(professor.id)}
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
          <ModalHeader>Novo Professor</ModalHeader>
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
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Departamento</FormLabel>
                  <Select
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                  >
                    <option value="">Selecione um departamento</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <Button type="submit" colorScheme="blue" width="full" isDisabled={!formData.department}>
                  Salvar
                </Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </CustomContainer>
  )
}

export default Professors 