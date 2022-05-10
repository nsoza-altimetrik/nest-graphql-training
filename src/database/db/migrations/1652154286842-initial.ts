import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1652154286842 implements MigrationInterface {
  name = 'initial1652154286842';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "invoice" ("id" SERIAL NOT NULL, "serie" character varying(3) NOT NULL, "number" character varying(9) NOT NULL, "created" TIMESTAMP NOT NULL, "sub_total" numeric NOT NULL, "tax" numeric NOT NULL, "total" numeric NOT NULL, CONSTRAINT "PK_15d25c200d9bcd8a33f698daf18" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "invoice"`);
  }
}
