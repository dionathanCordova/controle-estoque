/* eslint-disable camelcase */
import {
	Column,
	CreateDateColumn,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import Products from '../../Produtos/models/Produto';

export default class ProdutoVariacao {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	produto_id: string;

	@OneToMany(() => Products, products => products.id)
	pruducts: Products[];

	@Column()
	sku: string;

	@Column()
	valor_base: number;

	@Column()
	valor_promocional: number;

	@Column()
	valor_distribuidor: number;

	@Column()
	estoque_atual: number;

	@Column()
	estoque_minimo: number;

	@Column()
	isDisponivel: boolean;

	@Column()
	isPrincipal: boolean;

	@CreateDateColumn()
	created_at: string;

	@UpdateDateColumn()
	updated_at: string;
}
