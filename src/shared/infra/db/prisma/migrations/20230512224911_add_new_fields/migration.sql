-- AlterTable
ALTER TABLE "address" ADD COLUMN "report" TEXT;

-- AlterTable
ALTER TABLE "carRegistration" ADD COLUMN "vehicle" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_part" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "involvement" TEXT
);
INSERT INTO "new_part" ("email", "id", "involvement", "name") SELECT "email", "id", "involvement", "name" FROM "part";
DROP TABLE "part";
ALTER TABLE "new_part" RENAME TO "part";
CREATE UNIQUE INDEX "part_id_key" ON "part"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
