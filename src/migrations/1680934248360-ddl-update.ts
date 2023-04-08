import { MigrationInterface, QueryRunner } from 'typeorm';

export class ddlUpdate1680934248360 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE survey ADD COLUMN tempTestField INT DEFAULT 0;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE survey DROP COLUMN tempTestField;`);
  }
}
