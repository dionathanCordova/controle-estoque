/* eslint-disable camelcase */
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import Plano from '../../Planos/models/Plano';

@Entity('products')
export default class ProdutoModel {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	nome: string;

	@Column()
	key: string;

	@Column()
	marca_id: string;

	@Column()
	descricao: string;

	@Column()
	caracteristicas: string;

	@Column()
	destaque: string;

	@Column()
	altura: string;

	@Column()
	largura: string;

	@Column()
	comprimento: string;

	@Column()
	peso: number;

	@Column()
	media_avaliacao: number;

	@Column()
	qtd_avaliacao: number;

	@Column()
	tag: string;

	@Column()
	valor_pontos: number;

	@Column()
	plano_id: string;

	@ManyToOne(() => Plano)
	@JoinColumn({ name: 'plano_id' })
	plano: Plano;

	@Column()
	tipo_produto: string;

	@Column()
	aplica_desconto_plano: boolean;

	@Column()
	parcelamento_individual: number;

	@Column()
	frete_gratis: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
