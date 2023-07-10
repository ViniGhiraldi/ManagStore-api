# MANAGSTORE-API

## Objetivo:

### Esta API foi desenvolvida com o propósito de testar minhas habilidades com Node, TypeScript e alguns frameworks. Ela possuí autenticação com JWT, tendo mecânismos de refreshToken, cadastro de usuário e login. Conta também com uma relação de muitos para muitos entre usuários e produtos.

### !!! ManagStore-api faz parte de um projeto full-stack. Ela é consumida por um front-end que está versionado no meu github. Segue o link: https://github.com/ViniGhiraldi/ManagStore

## Características do Projeto:

### Trabalhando com Knex para a criação de banco de dados e o Zod para validações, a ManagStore-api permite que o usuário realize o CRUD de produtos. Também é possível cadastrar usuários e realizar login. Uma vez que um usuário está autenticado na API, ele é capaz de "comprar" (não há uso de dinheiro real na ManagStore-api), deletar e consultar produtos de sua posse. O projeto conta também com um sistema de autenticação via JWT, fornecendo ao usuário logado um accessToken e utilizando o método de refreshToken para mante-lo logado.

## Como executar:

### Após clonar o projeto, abra-o em seu terminal e digite o seguinte comando:
```
npm i
```
### ou
```
yarn
```
### Aguarde a conclusão da instalação das dependências e em seguida, execute:
```
npm run knex:migrate
```
### ou
```
yarn knex:migrate
```
### E em seguida, para inserir alguns registros pré-criados:
```
npm run knex:seed
```
### ou
```
yarn knex:seed
```
### E para inicializar o servidor, basta executar:
```
npm start
```
### ou
```
yarn start
```
### E dentro de alguns instantes a aplicação estará rodando na sua máquina.

## Observações:

### Caso a porta 3333 já esteja sendo utilizada, altere-a no arquivo .env. Lembrando que ao fazer isso, se você estiver rodando o front-end também, será necessário alterar a variável BASE_URL no environment do mesmo.

### O front-end ManagStore se encontra aqui: https://github.com/ViniGhiraldi/ManagStore
