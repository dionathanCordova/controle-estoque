import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createProdutoVariacao1605139793013
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'produto_variacao',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'produto_id',
						type: 'uuid',
					},
					{
						name: 'sku',
						type: 'varchar',
					},
					{
						name: 'valor_base',
						type: 'numeric',
						precision: 10,
						scale: 2,
					},
					{
						name: 'valor_promocional',
						type: 'numeric',
						precision: 10,
						scale: 2,
					},
					{
						name: 'valor_distribuidor',
						type: 'numeric',
						precision: 10,
						scale: 2,
					},
					{
						name: 'estoque_atual',
						type: 'numeric',
					},
					{
						name: 'estoque_minimo',
						type: 'numeric',
					},
					{
						name: 'isDisponivel',
						type: 'boolean',
						default: true,
					},
					{
						name: 'isPrincipal',
						type: 'boolean',
						default: true,
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
				foreignKeys: [
					{
						name: 'Products',
						referencedTableName: 'produtos',
						referencedColumnNames: ['id'],
						columnNames: ['produto_id'],
						onDelete: 'CASCADE',
						onUpdate: 'CASCADE',
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('produto_variacao');
	}
}
