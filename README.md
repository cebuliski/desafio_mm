# desafio_mm

**Sobre o projeto:** <br />
<br />
O projeto foi feito usando usando Node.js juntamente ao TypeORM e como banco de dados o MySQL, usando React no Front-End.<br />
Existem 8 campos ao todo que recebem dados: Nome, Data de Nascimento, CPF, Telefone, Endereço, Estado, Cidade e Email.<br />
Todo o CRUD está feito e funcionando corretamente.<br />
Todos os campos estão com validações. Como: telefone não aceita letra, CPF e e-mail possuem validações que não deixa um funcionário ser criado se não for preenchido o campo corretamente, não pode salvar sem antes preencher todos os campos, entre outros.<br />
Foi adicionado também duas tabelas no banco de dados: a de funcionário e a de cidade, em um relacionamento 1:n. Assim, funcionário leva a chave primária de cidade.<br />
As telas e o banco de dados podem ser vistos nas imagens ao final deste arquivo.

**Passo a passo para rodar o projeto:**

**OBS1:** Tendo os seguintes programas instalados: MySQL, VSCode <br />
**OBS2:** Criar um arquivo chamado ".env" dentro da pasta backend_mm, e em seguida pode só copiar e colar<br />
DB_HOST="nome do host" // Exemplo: localhost<br />
DB_PORT="porta" //Exemplo: 3306<br />
DB_USER="usuário" //Exemplo: root<br />
DB_PASS="senha do seu banco de dados MySQL" //Exemplo: 12345678<br />
DB_NAME="nome do banco de dados" //Exemplo: backend_mm<br />
PORT="porta do seu banco de dados" //Exemplo: 8080

**1º** Baixar o projeto com o git clone ou o .ZIP<br />
**2º** Entrar na pasta backend_mm e rodar o comando "yarn add --save"<br />
**3º** Entrar na pasta Front-End e rodar o comando "npm install --save". Os comandos 2 e 3 criam as pastas necessárias para o projeto<br />
**4º** Dentro da pasta backend_mm (para entrar na pasta usar o comando "cd backend_mm" e teclar enter). Após isso, rodar o comando "yarn migration:create" e em seguida "yarn migration:run"<br />
**5º** Dentro da pasta Front-End (para entrar na pasta usar o comando "cd Front-End" e teclar enter, em um novo terminal). Após isso, rodar o comando "npm run dev" <br />
**6º** Depois de instaladas as dependências, entrar novamente na pasta backend_mm e rodar o comando "yarn run dev". Isso fará rodar o back-end da aplicação<br />
**7º** Caso o navegador não abra automaticamente, insira na url "localhost:5173" <br />
**8º** Caso não crie automaticamente, criar um schima com o nome "backend_mm". Após isso estará funcionando

![banco de dados](https://user-images.githubusercontent.com/74630925/214944721-d2a877d5-2db1-4ec7-be76-88399a2be74b.png)
![cadastro](https://user-images.githubusercontent.com/74630925/214944123-d869a5cd-a6db-4991-84d6-8fcaf73ce6e8.png)
![listafuncionario](https://user-images.githubusercontent.com/74630925/214944320-56c2f291-af38-4f27-b20b-0a0988615eac.png)

