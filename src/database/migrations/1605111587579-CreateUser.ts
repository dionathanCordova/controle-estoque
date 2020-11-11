import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUser1605111587579 implements MigrationInterface {
	// eslint-disable-next-line class-methods-use-this
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'name',
						type: 'varchar',
					},
					{
						name: 'email',
						type: 'varchar',
					},
					{
						name: 'password',
						type: 'varchar',
					},
					{
						name: 'password_reset_token',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'password_reset_expires',
						type: 'timestamp with time zone',
						isNullable: true,
					},
					{
						name: 'isAdmin',
						type: 'boolean',
						default: false,
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
			}),
		);
	}

	// eslint-disable-next-line class-methods-use-this
	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('users');
	}
}
