import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addPrimaryIdUsers1620098581681 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "users",
      "id",
      new TableColumn({
        name: "id",
        type: "uuid",
        isPrimary: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "id");
  }
}
