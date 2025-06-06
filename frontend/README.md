# Professor Allocation - Frontend

Este é o frontend do sistema de alocação de professores, desenvolvido com React, TypeScript e Chakra UI.

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Chakra UI
- React Router
- Axios

## Funcionalidades

- Gerenciamento de Professores
- Gerenciamento de Cursos
- Gerenciamento de Departamentos
- Interface responsiva e amigável
- Integração com API REST

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório
2. Navegue até o diretório do projeto
3. Instale as dependências:

```bash
npm install
```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## Estrutura do Projeto

```
src/
  ├── components/     # Componentes reutilizáveis
  ├── pages/         # Páginas da aplicação
  ├── services/      # Serviços e configurações
  ├── theme.ts       # Configuração do tema
  ├── App.tsx        # Componente principal
  └── main.tsx       # Ponto de entrada
```

## API

O frontend se comunica com a API REST através do Axios, configurado para acessar o endpoint base `http://localhost:8080`.

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
