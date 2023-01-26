# desafio_mm

Sobre o projeto: 
O projeto foi feito usando usando Node.js juntamente ao TypeORM e como banco de dados o MySQL, usando React no Front-End.
Todos os campos estão com validações. Como por exemplo: telefone não aceita letra, validador de CPF e validador de e-mail.
Foi adicionado também duas tabelas no banco de dados: a de funcionário e a de cidade, em um relacionamento 1:n. Assim, funcionário leva a chave primária de cidade.
Não pode ser salvo um funcionário novo sem antes preencher todos os campos da tela.

Passo a passo para rodar o projeto:

OBS1: Tendo os seguintes programas instalados: MySQL, VSCode <br />
OBS2: Criar um arquivo chamado ".env" dentro da pasta backend_mm, e em seguida pode só copiar e colar<br />
DB_HOST="nome do host" // Exemplo: localhost<br />
DB_PORT="porta" //Exemplo: 3306<br />
DB_USER="usuário" //Exemplo: root<br />
DB_PASS="senha do seu banco de dados MySQL" //Exemplo: 12345678<br />
DB_NAME="nome do banco de dados" //Exemplo: backend_mm<br />

PORT=8080

1º Baixar o projeto com o git clone ou o .ZIP
2º Entrar na pasta backend_mm e rodar o comando "yarn add --save"
3º Entrar na pasta Front-End e rodar o comando "npm install --save". Os comandos 2 e 3 criam as pastas necessárias para o projeto
4º Dentro da pasta backend_mm (para entrar na pasta usar o comando "cd backend_mm" e teclar enter). Após isso, rodar o comando "yarn migration:create" e "yarn migration:run"
5º Dentro da pasta Front-End (para entrar na pasta usar o comando "cd Front-End" e teclar enter, em um novo terminal). Após isso, rodar o comando "npm run dev" 
6º Depois de instaladas as dependências, entrar novamente na pasta backend_mm e rodar o comando "yarn run dev". Isso fará rodar o back-end da aplicação
7º Caso o navegador não abra automaticamente, insira na url "localhost:5173" 
8º Caso não crie automaticamente, criar um schima com o nome "backend_mm". Após isso estará funcionando
