import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity('cidades')
export class Cidade {
  @PrimaryGeneratedColumn({ name: "id_cidade" })
  idCidade: number

  @Column({ type: 'text' })
  UF: string

  @Column({ type: 'text' })
  nome: string

  @OneToMany(() => Funcionario, funcionario => funcionario.cidade)
  funcionarios: Funcionario[]
}