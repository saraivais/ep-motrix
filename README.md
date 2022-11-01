<h1 align="center">DESAFIO PRÁTICO MOTRIX</h1>

## English 🇬🇧
<details>
  <summary>Click to expand!</summary>
  
## Description 📝
This project is a content management system that allows users to visualize, create, edit and delete text contents.

## Technologies and Tools 🔧
<img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="eslint-logo" />
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="docker-logo" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript-logo" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript-logo" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs-logo" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express-logo" />
<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql-logo" />
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="sequelize-logo" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm-logo" />
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="jwt-logo" />
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="postman-logo" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react-logo" />
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="react-router-logo" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css-logo" />

This project was developed through containers and container orchestration using **Docker** and **docker-compose** yml files. Three services were created, one for the **database**, one for **Back-end** and lastly the **Front-end**.   
The programming language used was **JavaScript**, with the superset **TypeScript** to strengthen good practices and clean code.
To develop the Back-end portion of this project, **Node.js** was used with the **Express.js** to create a RESTful API, connected through the **Sequelize** ORM with a **MySQL** instance.   
To add a security layer to this application, the **npm** libraries **jsonwebtoken** and **bcryptjs** were used to ascertain user authorization for harsher CRUD operations as **update** and **delete**, and to encrypt users' passwords into the database.   
Also, to assure the proper functionality of the API, integration tests using **Mocha**, **Chai** and **Sinon** were created.   
The API's documentation was created and published using **Postman** and can be found [here](https://documenter.getpostman.com/view/22527487/2s8YRiKtQv).   

The connection between Back-end and Front-end parts of the application was made using **Axios**. The Front-end part of the project was developed using **React** and styled with **CSS3**. The **React Router** library was used to enable routing in this Single Page Application and **React's** native **Context API** and **Hooks** composed the application's state management.

## Installation 📋
Before proceding to the installation, please make sure you have Docker, Docker-compose and Node.js installed on your machine.

1. Clone the repository and access the created directory:
```
git clone git@github.com:saraivais/ep-motrix.git
cd ep-motrix
```

2. Use the following script command to build & start the application:
```
npm run compose:up
```

3. Access via browser the Front-end part of this application using the url:
```
http://localhost:3000/
```
⚠️ _If you do wish to try out the application, please login using email **motrix@one.com** and password **motrix1**_
  
4. **If you wish to test the API using its integration tests:**

5. Use the following script command to access the back-end container:
```
npm run enter:backend
```
6. Run the test command:
```
npm test
```

## Comments 💬
This project was very enjoyable to develop and I learned a lot about containerization and container orchestration through docker-compose. The creation of a **development docker-compose file** allowed me to maintain the containers up during development and problem-solve as needed, for I had always script monitoring using volumes and development tools such as **nodemon** and **ts-node**.   
I also took this as an opportunity to learn a new tool, **Axios**, to make the Back-end and Front-end connection using my own API, and to get better at project setup, using **airbnb eslint** to monitor a fluid code development.   
For the future of this project, I wish to implement a new feature, an editing tool to fully implement **wysiwyg** and to create a testing coverage using **Cypress**.   
Overall, I am happy with this project's development and the result I got. Hope you all enjoy!

</details>

## Português 🇧🇷
<details>
  <summary>Clique para expandir!</summary>
  
## Descrição 📝
Este projeto é um sistema de gerenciamento de conteúdo que permite aos usuários visualizar, criar, editar e excluir conteúdos de texto.

## Tecnologias e Ferramentas 🔧
<img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="eslint-logo" />
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="docker-logo" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript-logo" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript-logo" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs-logo" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express-logo" />
<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql-logo" />
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="sequelize-logo" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm-logo" />
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="jwt-logo" />
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="postman-logo" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react-logo" />
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="react-router-logo" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css-logo" />

Este projeto foi desenvolvido por meio de contêineres e orquestração de contêineres usando0 **Docker** e arquivos yml **docker-compose**. Foram criados três serviços, um para o **banco de dados**, um para o **Back-end** e por último o **Front-end**.   
A linguagem de programação utilizada foi o **JavaScript**, com o superset **TypeScript** para fortalecer as boas práticas e código limpo.   
Para desenvolver a parte de Back-end deste projeto, **Node.js** foi usado com o **Express.js** para criar uma API RESTful, conectada por meio da ORM **Sequelize** com uma instância do **MySQL**.   
Para adicionar uma camada de segurança a esta aplicação, as bibliotecas **npm** **jsonwebtoken** e **bcryptjs** foram usadas para verificar a autorização do usuário para operações CRUD mais rigorosas como **atualizar** e **excluir**, e para criptografar as senhas do usuários no banco de dados.   
Além disso, para garantir o bom funcionamento da API, foram criados testes de integração usando **Mocha**, **Chai** e **Sinon**.   
A documentação da API foi criada e publicada usando o **Postman** e pode ser encontrada [aqui](https://documenter.getpostman.com/view/22527487/2s8YRiKtQv).   

A conexão entre as partes Back-end e Front-end da aplicação foi feita usando o **Axios**. A parte Front-end do projeto foi desenvolvida usando **React** e estilizada com **CSS3**. A biblioteca **React Router** foi usada para habilitar o roteamento nesta Single Page Application e o **Context API**, nativo do **React**, e os **Hooks** compuseram o gerenciamento de estado do aplicativo.

## Instalação 📋
Antes de iniciar a instalação, por favor se assegure que possui instalados Docker, Docker-compose e Node.js em sua máquina.
1. Clone o repositório e acesse o diretório criado:
```
git clone git@github.com:saraivais/ep-motrix.git
cd ep-motrix
```

2. Use o seguinte comando de script para construir e iniciar o aplicativo:
```
npm run compose:up
```

3. Acesse via navegador a parte Front-end deste aplicativo usando a url:
```
http://localhost:3000/
```
⚠️ _Se você deseja navegar pela aplicação, faça login utilizando o e-mail **motrix@one.com** e a senha **motrix1**_
  
4. **Se você deseja testar a API usando seus testes de integração:**

5. Use o seguinte comando de script para acessar o contêiner de back-end:
```
npm run enter:backend
```

6. Execute o comando de teste:
```
npm test
```

## Comentários 💬
Este projeto foi muito agradável de desenvolver e aprendi muito sobre conteinerização e orquestração de contêineres através do docker-compose. A criação de um **arquivo de composição docker de desenvolvimento** me permitiu manter os contêineres ativos durante o desenvolvimento e solucionar problemas conforme necessário, pois sempre tive monitoramento de scripts usando volumes e ferramentas de desenvolvimento como **nodemon** e **ts-node**.   
Também aproveitei isso como uma oportunidade para aprender uma nova ferramenta, **Axios**, para fazer a conexão Back-end e Front-end usando minha própria API e também melhorar a configuração do projeto, usando o **airbnb eslint** para monitorar um desenvolvimento fluido de código.   
Para o futuro deste projeto, desejo implementar um novo recurso, uma ferramenta de edição para implementar totalmente o **wysiwyg** e criar uma cobertura de testes usando o **Cypress**.   
No geral, estou feliz com o desenvolvimento deste projeto e com o resultado que obtive. Espero que gostem!

</details>
