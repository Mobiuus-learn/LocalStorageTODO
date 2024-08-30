# Task Manager App

Um aplicativo de gerenciamento de tarefas construído com React e Chakra UI. Este projeto permite criar e remover tarefas, com dados armazenados localmente usando _localStorage_.

## Funcionalidades

- Adicionar novas tarefas
- Remover tarefas existentes
- Armazenamento persistente no localStorage

## Tecnologias Usadas

- React: Biblioteca para construção da interface de usuário
- Chakra UI: Biblioteca de componentes UI para React
- TypeScript: Linguagem que adiciona tipagem estática ao JavaScript

## Estrutura do Projeto

- App.tsx: Componente principal que gerencia o estado das tarefas e a interação com localStorage.
- Form.tsx: Componente para adicionar novas tarefas.
- ShowTask.tsx: Componente para exibir a lista de tarefas e permitir a remoção de tarefas.
- Header.tsx: Componente de cabeçalho.

# Instalação

Para instalar e executar o projeto localmente, siga os passos abaixo:

## Clone o repositório

`bash`

`git clone https://github.com/usuario/repo.git`

`cd repo`

## Instale as dependências

`npm install`

# Inicie o servidor de desenvolvimento

`npm start`

Abra o navegador e acesse

http://localhost:3000

# Uso

- Adicionar uma tarefa: Insira o texto da tarefa no campo de entrada e clique no botão "Save". A tarefa será adicionada à lista e salva no localStorage.
- Remover uma tarefa: Clique no botão "Remove" ao lado da tarefa que deseja excluir. A tarefa será removida da lista e do localStorage.

# Contribuição

Faça um fork do repositório
Crie uma branch para a sua feature: git checkout -b feature/nova-feature
Faça commit das suas alterações: git commit -am 'Add new feature'
Push para a branch: git push origin feature/nova-feature
Abra um pull request
Licença
Este projeto está licenciado sob a MIT License.
