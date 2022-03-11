-- CreateTable
CREATE TABLE "productos" (
    "id" SERIAL NOT NULL,
    "codigoproducto" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "imagen" TEXT NOT NULL,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "productos_id_key" ON "productos"("id");
