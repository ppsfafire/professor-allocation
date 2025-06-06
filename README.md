# Professor Allocation

Sistema completo para alocação de professores em departamentos e cursos, com frontend moderno em React (Vite + TypeScript + Chakra UI) e backend robusto em Spring Boot, persistindo dados em PostgreSQL.

## Funcionalidades

- Cadastro, listagem e remoção de **Professores**, **Cursos** e **Departamentos**
- Associação de professores a departamentos
- Validação para impedir remoção de departamentos com professores vinculados
- Interface moderna, responsiva e intuitiva
- Integração total entre frontend e backend via API REST
- Deploy em nuvem (frontend na Vercel, backend e banco no Render)
- Validações amigáveis e mensagens de erro claras

## Tecnologias Utilizadas

- **Frontend:** React, Vite, TypeScript, Chakra UI, Axios, React Router
- **Backend:** Spring Boot, Spring Data JPA, PostgreSQL
- **Infraestrutura:** Vercel (frontend), Render (backend e banco de dados PostgreSQL)

## Como executar o projeto localmente

### Pré-requisitos

- Node.js (v18+ recomendado)
- npm
- Java 17+
- Maven
- PostgreSQL (opcional, para rodar localmente com persistência)

### 1. Clone o repositório

```bash
git clone https://github.com/ppsfafire/professor-allocation.git
cd professor-allocation
```

### 2. Configure o backend

- Edite o arquivo `backend/src/main/resources/application.properties` para apontar para seu banco PostgreSQL local ou use as variáveis de ambiente do Render para rodar em nuvem.

### 3. Inicie o backend

```bash
cd backend
mvn spring-boot:run
```
O backend estará disponível em `http://localhost:8080` (ou na porta configurada).

### 4. Inicie o frontend

Abra outro terminal e execute:

```bash
cd frontend
npm install
npm run dev
```
O frontend estará disponível em `http://localhost:5173`.

### 5. Acesse o sistema

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:8080](http://localhost:8080)

## Ambiente de Produção

- **Frontend:** [https://professor-allocation.vercel.app](https://professor-allocation.vercel.app)
- **Backend:** [https://professor-allocation-backend.onrender.com](https://professor-allocation-backend.onrender.com)
- **Banco de dados:** PostgreSQL hospedado no Render

## Observações

- O sistema está preparado para produção, com CORS configurado para permitir apenas o frontend da Vercel.
- Não é possível cadastrar professor sem departamento.
- Não é possível remover departamento com professores vinculados (mensagem amigável exibida).
- O backend pode ser facilmente adaptado para outros bancos relacionais suportados pelo Spring Data JPA.
- O deploy é automático via GitHub para Vercel (frontend) e Render (backend).

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

