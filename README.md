# Projeto Meu Guru Full Stack 🚀
Este projeto consiste em uma Aplicação Full Stack com um Back-End que fornece uma plataforma de usuários e um Front-End que exibe esses usuários em uma tabela. A aplicação foi desenvolvida utilizando as seguintes tecnologias:

Front-End: React Vite Typescript

Back-End: MySQL, Express e Node.js

Tecnologias adicionais: React Router, Jest, Mocha e Chai para testes

## Guia para executar a aplicação:
### Pré-requisitos
Certifique-se de ter o Node.js e o MySQL instalados em sua máquina.
#### Instalação do Node.js

```shell
npm install node
```

### Certifique-se de que o MySQL esteja em execução:
```shell
sudo apt install mysql-server
systemctl start mysql
```

### No arquivo Connection.js configure a promise
  host: 'localhost', // Seu host do MySQL
  
  user: 'root', // Seu usuário do MySQL
  
  password: '1234', // Sua senha do MySQL
  
  database: 'meu_guru', // Nome do banco de dados criado anteriormente

## Iniciando o projeto:
### Clone o projeto
```shell
git clone git@github.com:betim009/meu_guru_full_stack.git
```

### Navegue até o diretório do backend e Cria o BD:
```shell
cd backend
npm run initdb
```

### Inicia a aplicação 
```shell
npm i
npm run start
```
A aplicação estará disponível na porta 3000, na rota /users:
http://localhost:3000/users


### Para rodar os tests:
```shell
npm run test
```
### Testando a API com ThunderClient
Você pode usar o ThunderClient para testar as rotas da API:

Método get
http://localhost:3000/users

Método Post
http://localhost:3000/users

Body:
{
  "nome": "Perry",
  "email": "Perry@meuguru.com",
  "password": "meuguru123",
  "idade": "25", 
  "sexo": "Masculino",
  "cidade": "Alegre"
}

### Front-End da aplicação:
## Iniciando:
```shell
cd frontend-typescript
npm i 
npm run dev
```

### Testes:
```shell
npm test
```


### Imagem da aplicação:

![image](https://github.com/betim009/meu_guru_full_stack/assets/62117863/7a102e14-32fa-4e6b-9e90-5460572b273f)


