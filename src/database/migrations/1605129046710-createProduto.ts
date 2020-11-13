import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createProduto1605129046710 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'produtos',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'nome',
						type: 'varchar',
					},
					{
						name: 'key',
						type: 'varchar',
					},
					{
						name: 'marca_id',
						type: 'uuid',
					},
					{
						name: 'descricao',
						type: 'varchar',
					},
					{
						name: 'destaque',
						type: 'char',
					},
					{
						name: 'caracteristicas',
						type: 'varchar',
					},
					{
						name: 'altura',
						type: 'numeric',
						precision: 10,
						scale: 2,
					},
					{
						name: 'largura',
						type: 'numeric',
						precision: 10,
						scale: 2,
					},
					{
						name: 'peso',
						type: 'numeric',
						precision: 10,
						scale: 2,
					},
					{
						name: 'media_avaliacao',
						type: 'numeric',
						precision: 10,
						scale: 2,
					},
					{
						name: 'tag',
						type: 'varchar',
					},
					{
						name: 'plano_id',
						type: 'uuid',
					},
					{
						name: 'tipo_produto',
						type: 'varchar',
					},
					{
						name: 'aplica_desconto_plano',
						type: 'char',
					},
					{
						name: 'parcelamento_individual',
						type: 'numeric',
					},
					{
						name: 'frete_gratis',
						type: 'char',
					},
					{
						name: 'created_at',
						type: 'timestamp with time zone',
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp with time zone',
						default: 'now()',
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('produtos');
	}
}
