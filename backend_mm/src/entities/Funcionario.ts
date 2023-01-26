import { Column, Entity, JoinColumn, OneToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cidade } from "./Cidade";

@Entity('funcionarios')
export class Funcionario {
  @PrimaryGeneratedColumn({ name: "id_funcionario" })
  idFuncionario: number

  @Column({ type: 'text' })
  nome: string

  @Column({ type: 'text' })
  endereco: string

  @Column({ type: 'text' })
  telefone: string

  @Column({ type: 'date' })
  dataNascimento: Date

  @Column({ type: 'text' })
  CPF: string

  @Column({ type: 'text' })
  email: string

  @ManyToOne(() => Cidade, cidade => cidade.funcionarios)
  @JoinColumn({ name: 'fkid_cidade' })
  cidade: Cidade

}