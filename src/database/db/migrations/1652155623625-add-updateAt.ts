import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUpdateAt1652155623625 implements MigrationInterface {
  name = 'addUpdateAt1652155623625';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "invoice" ADD "updated" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "updated"`);
  }
}
