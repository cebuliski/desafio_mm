import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674437496807 implements MigrationInterface {
    name = 'default1674437496807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`funcionarios\` (\`id_funcionario\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`endereco\` text NOT NULL, \`telefone\` text NOT NULL, \`dataNascimento\` date NOT NULL, \`CPF\` text NOT NULL, \`email\` text NOT NULL, \`fkid_cidade\` int NULL, PRIMARY KEY (\`id_funcionario\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cidades\` (\`id_cidade\` int NOT NULL AUTO_INCREMENT, \`UF\` text NOT NULL, \`nome\` text NOT NULL, PRIMARY KEY (\`id_cidade\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`funcionarios\` ADD CONSTRAINT \`FK_1b7f09ad4bb5de1ada1b96facb4\` FOREIGN KEY (\`fkid_cidade\`) REFERENCES \`cidades\`(\`id_cidade\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`funcionarios\` DROP FOREIGN KEY \`FK_1b7f09ad4bb5de1ada1b96facb4\``);
        await queryRunner.query(`DROP TABLE \`cidades\``);
        await queryRunner.query(`DROP TABLE \`funcionarios\``);
    }

}
