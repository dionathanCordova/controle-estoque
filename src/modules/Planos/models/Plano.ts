/* eslint-disable camelcase */
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import Produtos from '../../Produtos/models/Produto';

@Entity('plano')
export default class ProdutoModel {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	nome: string;

	@Column()
	descricao: string;

	@Column()
	produto_id: string;

	@OneToMany(() => Produtos, product => product.id)
	produto: Produtos[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
