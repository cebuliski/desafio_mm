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

**OBS1:** Tendo os seguintes programas instalados em sua máquina: MySQL, VSCode e Node.js<br />
**OBS2:** Criar um arquivo chamado ".env" dentro da pasta backend_mm, e em seguida pode só copiar e colar os comandos abaixo substituindo de acordo com as suas especificidades, não precisa de aspas no código, e ao lado tem um exemplo do que poderia ser digitado<br />
DB_HOST="nome do host" // Exemplo: localhost<br />
DB_PORT="porta" //Exemplo: 3306<br />
DB_USER="usuário" //Exemplo: root<br />
DB_PASS="senha do seu banco de dados MySQL" //Exemplo: 12345678<br />
DB_NAME="nome do banco de dados" //Exemplo: backend_mm<br />
PORT="porta do seu banco de dados" //Exemplo: 8080

**1º** Baixar o projeto com o git clone ou o .ZIP e abri-lo no VSCode<br />
**2º** Abrir um terminal e entrar na pasta backend_mm (para entrar na pasta usar o comando "cd backend_mm" e teclar enter) e rodar o comando "yarn"<br />
**3º** Abrir um novo terminal e entrar na pasta Front-End (para entrar na pasta usar o comando "cd Front-End" e teclar enter) e rodar o comando "npm install --save". <br />Os comandos 2 e 3 criam as pastas necessárias e fazem instalações para rodar o projeto<br />
**4º** Abrir o seu Banco de Dados MySQL e criar um Schema. Ele pode ser criado na parte que diz "Schemas" com um botão direito em um espaço vazio, e em seguida clicando em "Create Schema" e colocando como nome "backend_mm". <br />
Sem este passo o VSCode dará um erro quando for fazer o 5º comando informando que não existe um banco, por isso é necessário sua criação. E, não é necessário inserir nada no Schema criado, será gerado tudo automaticamente nos próximos passos <br />
**5º** Voltando ao VSCode, dentro da pasta "backend_mm" em seu terminal, rodar o comando "yarn migration:generate" e em seguida "yarn migration:run"<br />
Agora, se olhar dentro da pasta "src" que está na "backend_mm", verá que foi criada uma nova pasta chamada "migrations". Ali está o banco de dados já criado usando o TypeORM. E, se olhar no MySQL no Schema que foi criado, verá lá todas as suas tabelas e campos<br />
**6º** Dentro da pasta Front-End em seu terminal, rodar o comando "npm run dev" <br />
**7º** Isso deverá fazer o projeto abrir sozinho em seu navegador. Mas, caso isso não ocorra, abra o navegador e insira na url "localhost: 5173", com isso ele será aberto<br />
**8º** Entrar novamente na pasta "backend_mm" e em seu terminal rodar o comando "yarn run dev". Isso fará rodar o back-end da aplicação 
**9º** Agora com tudo instalado e funcionando, poderá ser feito todo o CRUD e testes da aplicação no seu navegador e visualizando tudo no MySQL<br />

![banco de dados](https://user-images.githubusercontent.com/74630925/214944721-d2a877d5-2db1-4ec7-be76-88399a2be74b.png)
![cadastro](https://user-images.githubusercontent.com/74630925/214944123-d869a5cd-a6db-4991-84d6-8fcaf73ce6e8.png)
![listafuncionario](https://user-images.githubusercontent.com/74630925/214944320-56c2f291-af38-4f27-b20b-0a0988615eac.png)

