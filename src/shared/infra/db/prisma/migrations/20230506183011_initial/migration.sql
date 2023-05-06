-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "publicPlace" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "number" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "carRegistration" (
    "id" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "part" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "involvement" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "address_id_key" ON "address"("id");

-- CreateIndex
CREATE UNIQUE INDEX "carRegistration_id_key" ON "carRegistration"("id");

-- CreateIndex
CREATE UNIQUE INDEX "part_id_key" ON "part"("id");
