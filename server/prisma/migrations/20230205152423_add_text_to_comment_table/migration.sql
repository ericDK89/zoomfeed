/*
  Warnings:

  - You are about to drop the column `create_at` on the `comment` table. All the data in the column will be lost.
  - Added the required column `text` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "comment_author_id" TEXT NOT NULL,
    CONSTRAINT "comment_comment_author_id_fkey" FOREIGN KEY ("comment_author_id") REFERENCES "comment_author" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_comment" ("comment_author_id", "id", "likes") SELECT "comment_author_id", "id", "likes" FROM "comment";
DROP TABLE "comment";
ALTER TABLE "new_comment" RENAME TO "comment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
