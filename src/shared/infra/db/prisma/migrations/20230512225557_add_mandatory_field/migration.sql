/*
  Warnings:

  - Made the column `involvement` on table `part` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_part" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "involvement" TEXT NOT NULL
);
INSERT INTO "new_part" ("email", "id", "involvement", "name") SELECT "email", "id", "involvement", "name" FROM "part";
DROP TABLE "part";
ALTER TABLE "new_part" RENAME TO "part";
CREATE UNIQUE INDEX "part_id_key" ON "part"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
