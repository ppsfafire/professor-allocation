# Professor Allocation

Sistema de alocação de professores desenvolvido com React (Vite + TypeScript + Chakra UI) no frontend e Spring Boot no backend.

## Funcionalidades
- Cadastro, listagem e remoção de Professores, Cursos e Departamentos
- Associação de professores a departamentos
- Validação para impedir remoção de departamentos com professores vinculados
- Interface moderna e responsiva

## Tecnologias Utilizadas
- **Frontend:** React, Vite, TypeScript, Chakra UI, Axios, React Router
- **Backend:** Spring Boot, Spring Data JPA, H2 Database

## Como executar o projeto

### Pré-requisitos
- Node.js (v18+ recomendado)
- npm
- Java 17+
- Maven

### 1. Clone o repositório
```bash
git clone https://github.com/ppsfafire/professor-allocation.git
cd professor-allocation
```

### 2. Inicie o backend
```bash
cd backend
mvn spring-boot:run
```
O backend estará disponível em `http://localhost:8080`.

### 3. Inicie o frontend
Abra outro terminal e execute:
```bash
cd frontend
npm install
npm run dev
```
O frontend estará disponível em `http://localhost:5173`.

### 4. Acesse o sistema
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:8080](http://localhost:8080)
- Console H2: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
  - JDBC URL: `jdbc:h2:mem:professordb`
  - Username: `sa`
  - Password: (deixe em branco)

## Observações
- Não é possível cadastrar professor sem departamento.
- Não é possível remover departamento com professores vinculados (mensagem amigável exibida).
- O banco de dados é em memória (H2), reinicia a cada start do backend.

## Estrutura do Projeto
```
professor-allocation/
├── backend/
│   └── ... (código Spring Boot)
└── frontend/
    └── ... (código React)
```

## Contribuição
Pull requests são bem-vindos! Para grandes mudanças, abra uma issue primeiro para discutir o que você gostaria de modificar.

---
Desenvolvido por [ppsfafire](https://github.com/ppsfafire)

